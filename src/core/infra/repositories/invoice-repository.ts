import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import { NCM } from "@/core/domain/entities/ncm";
import { Product } from "@/core/domain/entities/product";
import { PrismaClient } from "../../../../prisma";

interface InvoiceRepository {
	save(invoice: Invoice): Promise<void>;
	update(invoice: Invoice): Promise<void>;
	list(): Promise<Invoice[]>;
	remove(id: string): Promise<void>;
	retrieve(id: string): Promise<Invoice | null>;
}

type InvoiceRaw = {
	id: string;
	registration: string;
	createdAt: Date;
	quote: number;
	enable: boolean;
	products: {
		amount: number;
		quantity: number;
		product: {
			id: string;
			ncm: {
				id: string;
				ipi: number;
				pis: number;
				tax: number;
				code: number;
				icms: number;
				cofins: number;
			};
			tid: string;
			name: string;
			width: number;
			height: number;
			length: number;
			weight: number;
			description: string;
		};
	}[];
};

export class InvoiceDatabaseRepository implements InvoiceRepository {
	private database = new PrismaClient();

	async retrieve(id: string): Promise<Invoice | null> {
		await this.database.$connect();
		const [invoice] = await this.database.$queryRaw<InvoiceRaw[]>`
			SELECT 
				i."id",
				i."registration",
				i."createdAt",
				i."quote",
				i."enable",
				jsonb_agg(
					jsonb_build_object(
						'id', ip.id,
						'amount', ip.amount,
						'quantity', ip.quantity,
						'product', jsonb_build_object(
							'id', p.id,
							'tid', p.tid,
							'name', p.name,
							'width', p.width,
							'height', p.height,
							'length', p.length,
							'weight', p.weight,
							'description', p.description,
							'ncm', jsonb_build_object(
								'id', n.id,
								'code', n.code,
								'tax', n.tax,
								'icms', n.icms,
								'pis', n.pis,
								'cofins', n.cofins,
								'ipi', n.ipi
							)
						)
					)
				) AS products
			FROM invoices i
			LEFT JOIN invoice_products ip 
				ON ip."invoiceId" = i.id AND ip.enable = true
			LEFT JOIN products p 
				ON p.id = ip."productId" AND p.enable = true
			LEFT JOIN ncms n 
				ON n.id = p."ncmId" AND n.enable = true
			WHERE i.enable = true AND i."id" = ${id}
			GROUP BY 
				i."id",
				i."registration",
				i."createdAt",
				i."quote",
				i."enable";
		`;
		await this.database.$disconnect();

		if (!invoice) return null;
		return Invoice.instance({
			createdAt: invoice.createdAt,
			id: invoice.id,
			products: invoice.products.map((p) =>
				InvoiceProduct.create({
					...p,
					amount: FormatFloatNumberHelper.format(p.amount, 10000),
					product: Product.instance({
						...p.product,
						ncm: NCM.create(p.product.ncm),
					}),
				}),
			),
			quote: FormatFloatNumberHelper.format(invoice.quote, 10000),
			registration: invoice.registration,
		});
	}

	async update(invoice: Invoice): Promise<void> {
		await this.database.$connect();

		const invoiceActive = await this.database.invoice.findFirst({
			where: {
				enable: true,
				id: invoice.id,
			},
		});

		if (!invoiceActive) {
			await this.database.$disconnect();
			return;
		}

		await this.database.$transaction([
			this.database.invoice.update({
				data: {
					enable: false,
				},
				where: {
					invoiceId: invoiceActive.invoiceId,
				},
			}),
			this.database.invoice.create({
				data: {
					id: invoice.id,
					registration: invoice.registration,
					createdAt: invoice.createdAt,
					quote: FormatFloatNumberHelper.toPersist(invoice.quote, 10000),
					enable: true,
					event: "UPDATED",
				},
			}),
		]);

		const invoiceProductsOld = await this.database.invoiceProduct.findMany({
			where: {
				enable: true,
				invoiceId: invoiceActive.id,
			},
		});

		const invoiceProductToRemoved = invoiceProductsOld.filter(
			(ipo) => !invoice.products.map((p) => p.id).includes(ipo.id),
		);

		await Promise.all(
			invoiceProductToRemoved.map(
				async (ipr) =>
					await this.database.$transaction([
						this.database.invoiceProduct.update({
							data: {
								enable: false,
							},
							where: {
								invoiceProductId: ipr.invoiceProductId,
							},
						}),
						this.database.invoiceProduct.create({
							data: {
								amount: ipr.amount,
								enable: false,
								event: "DELETED",
								id: ipr.id,
								invoiceId: ipr.invoiceId,
								productId: ipr.productId,
								quantity: ipr.quantity,
							},
						}),
					]),
			),
		);

		await Promise.all(
			invoice.products.map(async (p) => {
				const invoiceProductOld = invoiceProductsOld.find(
					(ip) => ip.id === p.id,
				);
				if (!invoiceProductOld) {
					return await this.database.invoiceProduct.create({
						data: {
							invoiceId: invoice.id,
							id: p.id,
							amount: FormatFloatNumberHelper.toPersist(p.amount, 10000),
							quantity: p.quantity,
							productId: p.product.id,
							enable: true,
							event: "CREATED",
						},
					});
				}
				await this.database.invoiceProduct.update({
					data: {
						enable: false,
					},
					where: {
						invoiceProductId: invoiceProductOld.invoiceProductId,
					},
				});
				await this.database.invoiceProduct.create({
					data: {
						invoiceId: invoice.id,
						id: p.id,
						amount: FormatFloatNumberHelper.toPersist(p.amount, 10000),
						quantity: p.quantity,
						productId: p.product.id,
						enable: true,
						event: "UPDATED",
					},
				});
			}),
		);

		await this.database.$disconnect();
	}

	async save(invoice: Invoice): Promise<void> {
		await this.database.$connect();

		const createdInvoice = await this.database.invoice.create({
			data: {
				id: invoice.id,
				registration: invoice.registration,
				createdAt: invoice.createdAt,
				quote: FormatFloatNumberHelper.toPersist(invoice.quote, 10000),
				enable: true,
				event: "CREATED",
			},
		});

		await Promise.all(
			invoice.products.map((p) =>
				this.database.invoiceProduct.create({
					data: {
						id: p.id,
						invoiceId: createdInvoice.id,
						productId: p.product.id,
						quantity: p.quantity,
						amount: FormatFloatNumberHelper.toPersist(p.amount, 10000),
						enable: true,
						event: "CREATED",
					},
				}),
			),
		);

		await this.database.$disconnect();
	}

	async list(): Promise<Invoice[]> {
		await this.database.$connect();
		const response = await this.database.$queryRaw<InvoiceRaw[]>`
			SELECT 
				i."id",
				i."registration",
				i."createdAt",
				i."quote",
				i."enable",
				COALESCE(jsonb_agg(
					CASE 
						WHEN ip.id IS NOT NULL THEN
							jsonb_build_object(
								'amount', ip.amount,
								'quantity', ip.quantity,
								'product', jsonb_build_object(
									'id', p.id,
									'tid', p.tid,
									'name', p.name,
									'width', p.width,
									'height', p.height,
									'length', p.length,
									'weight', p.weight,
									'description', p.description,
									'ncm', jsonb_build_object(
										'id', n.id,
										'code', n.code,
										'tax', n.tax,
										'icms', n.icms,
										'pis', n.pis,
										'cofins', n.cofins,
										'ipi', n.ipi
									)
								)
							)
						ELSE NULL
					END
				) FILTER (WHERE ip.id IS NOT NULL), '[]'::jsonb) AS products
			FROM invoices i
			LEFT JOIN invoice_products ip 
				ON ip."invoiceId" = i.id AND ip.enable = true
			LEFT JOIN products p 
				ON p.id = ip."productId" AND p.enable = true
			LEFT JOIN ncms n 
				ON n.id = p."ncmId" AND n.enable = true
			WHERE i."enable" = true
			GROUP BY 
				i."id",
				i."registration",
				i."createdAt",
				i."quote",
				i."enable";
		`;

		await this.database.$disconnect();

		return response.map((invoice) =>
			Invoice.instance({
				createdAt: invoice.createdAt,
				id: invoice.id,
				products: invoice.products.map((p) =>
					InvoiceProduct.create({
						...p,
						amount: FormatFloatNumberHelper.format(p.amount, 10000),
						product: Product.instance({
							...p.product,
							ncm: NCM.create(p.product.ncm),
						}),
					}),
				),
				quote: FormatFloatNumberHelper.format(invoice.quote, 10000),
				registration: invoice.registration,
			}),
		);
	}

	async remove(id: string): Promise<void> {
		await this.database.$connect();

		const invoiceActive = await this.database.invoice.findFirst({
			where: {
				enable: true,
				id,
			},
		});

		if (!invoiceActive) {
			await this.database.$disconnect();
			return;
		}

		const invoiceProducts = await this.database.invoiceProduct.findMany({
			where: {
				enable: true,
				invoiceId: invoiceActive.id,
			},
		});

		await Promise.all(
			invoiceProducts.map(async (ip) => {
				await this.database.$transaction([
					this.database.invoiceProduct.update({
						data: {
							enable: false,
						},
						where: {
							invoiceProductId: ip.invoiceProductId,
						},
					}),
					this.database.invoiceProduct.create({
						data: {
							invoiceId: ip.invoiceId,
							id: ip.id,
							productId: ip.productId,
							quantity: ip.quantity,
							amount: ip.amount,
							enable: false,
							event: "DELETED",
						},
					}),
				]);
			}),
		);

		// Marca invoice como inativa e cria nova versão "DELETED"
		await this.database.$transaction([
			this.database.invoice.update({
				where: {
					invoiceId: invoiceActive.invoiceId,
				},
				data: {
					enable: false,
				},
			}),
			this.database.invoice.create({
				data: {
					invoiceId: crypto.randomUUID(), // ou mantenha o antigo, se necessário
					id: invoiceActive.id,
					quote: invoiceActive.quote,
					registration: invoiceActive.registration,
					createdAt: invoiceActive.createdAt,
					enable: false,
					event: "DELETED",
				},
			}),
		]);

		await this.database.$disconnect();
	}

	static instance() {
		return new InvoiceDatabaseRepository();
	}
}
