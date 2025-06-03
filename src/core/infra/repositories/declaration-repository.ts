import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
import { Declaration } from "@/core/domain/entities/declaration";
import { Expense } from "@/core/domain/entities/expense";
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration";
import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import { NCM } from "@/core/domain/entities/ncm";
import { Product } from "@/core/domain/entities/product";
import { PrismaClient } from "../../../../prisma";

export interface DeclarationRepository {
	save(declaration: Declaration): Promise<void>;
	retrieve(id: string): Promise<Declaration | null>;
	list(): Promise<Declaration[]>;
	remove(id: string): Promise<void>;
}

export class DeclarationDatabaseRepository implements DeclarationRepository {
	private database = new PrismaClient();

	async save(declaration: Declaration): Promise<void> {
		await this.database.$connect();

		await this.database.declaration.create({
			data: {
				id: declaration.id,
				registration: declaration.registration,
				createdAt: declaration.createdAt,
				quote: FormatFloatNumberHelper.toPersist(declaration.quote, 10000),
				enable: true,
				event: "CREATED",
			},
		});

		await Promise.all(
			declaration.expenses.map((expDecl: ExpenseDeclaration) => {
				const exp = expDecl.expense;
				return this.database.declarationExpense.create({
					data: {
						id: exp.id,
						name: exp.name,
						useICMSBase: exp.useICMSBase,
						useCustomsBase: exp.useCustomsBase,
						allocationMethod: exp.allocationMethod,
						currency: exp.currency,
						amount: FormatFloatNumberHelper.toPersist(expDecl.amount, 100),
						enable: true,
						event: "CREATED",
						declaration: declaration.id,
					},
				});
			}),
		);

		const inv: Invoice = declaration.invoice;
		await this.database.declarationInvoice.create({
			data: {
				declaration: declaration.id,
				id: inv.id,
				registration: inv.registration,
				createdAt: inv.createdAt,
				quote: FormatFloatNumberHelper.toPersist(inv.quote, 10000),
				enable: true,
				event: "CREATED",
			},
		});

		await Promise.all(
			inv.products.map((prod: InvoiceProduct) => {
				const ncm = prod.product.ncm;
				return this.database.$transaction([
					this.database.declarationInvoiceProduct.create({
						data: {
							invoice: inv.id,
							id: prod.id,
							name: prod.product.name,
							tid: prod.product.tid,
							description: prod.product.description,
							weight: prod.product.weight,
							length: prod.product.length,
							height: prod.product.height,
							width: prod.product.width,
							enable: true,
							event: "CREATED",
							amount: FormatFloatNumberHelper.toPersist(prod.amount, 100),
							quantity: prod.quantity,
							productId: prod.product.id,
						},
					}),
					this.database.declarationInvoiceProductNCM.create({
						data: {
							product: prod.id,
							id: ncm.id,
							code: ncm.code,
							tax: ncm.tax,
							icms: ncm.icms,
							pis: ncm.pis,
							cofins: ncm.cofins,
							ipi: ncm.ipi,
							enable: true,
							event: "CREATED",
						},
					}),
				]);
			}),
		);

		await this.database.$disconnect();
	}

	async update(declaration: Declaration): Promise<void> {
		await this.database.$connect();

		// 1. Desabilita registros antigos
		await this.database.declaration.updateMany({
			where: { id: declaration.id, enable: true },
			data: { enable: false, event: "DELETED" },
		});

		await this.database.declarationExpense.updateMany({
			where: { declaration: declaration.id, enable: true },
			data: { enable: false, event: "DELETED" },
		});

		// 2. Tenta desabilitar invoice anterior (se existir)
		const oldInvoices =
			await this.database.declarationInvoice.updateManyAndReturn({
				where: { declaration: declaration.id, enable: true },
				data: { enable: false, event: "DELETED" },
				select: { id: true },
			});

		if (oldInvoices.length > 0) {
			const oldInvoiceId = oldInvoices[0].id;

			const oldProducts =
				await this.database.declarationInvoiceProduct.updateManyAndReturn({
					where: { invoice: oldInvoiceId, enable: true },
					data: { enable: false, event: "DELETED" },
					select: { id: true },
				});

			await this.database.declarationInvoiceProductNCM.updateMany({
				where: {
					product: { in: oldProducts.map((p) => p.id) },
					enable: true,
				},
				data: { enable: false, event: "DELETED" },
			});
		}

		// 3. Cria nova declaration
		await this.database.declaration.create({
			data: {
				id: declaration.id,
				registration: declaration.registration,
				createdAt: declaration.createdAt,
				quote: FormatFloatNumberHelper.toPersist(declaration.quote, 10000),
				enable: true,
				event: "UPDATED",
			},
		});

		// 4. Cria nova lista de despesas
		await Promise.all(
			declaration.expenses.map((expDecl: ExpenseDeclaration) => {
				const exp = expDecl.expense;
				return this.database.declarationExpense.create({
					data: {
						id: exp.id,
						name: exp.name,
						useICMSBase: exp.useICMSBase,
						useCustomsBase: exp.useCustomsBase,
						allocationMethod: exp.allocationMethod,
						currency: exp.currency,
						amount: FormatFloatNumberHelper.toPersist(expDecl.amount, 100),
						enable: true,
						event: "UPDATED",
						declaration: declaration.id,
					},
				});
			}),
		);

		// 5. Cria nova invoice
		const inv: Invoice = declaration.invoice;
		await this.database.declarationInvoice.create({
			data: {
				declaration: declaration.id,
				id: inv.id,
				registration: inv.registration,
				createdAt: inv.createdAt,
				quote: FormatFloatNumberHelper.toPersist(inv.quote, 10000),
				enable: true,
				event: "UPDATED",
			},
		});

		// 6. Cria novos produtos e seus respectivos NCMs
		await Promise.all(
			inv.products.map((prod: InvoiceProduct) => {
				const ncm = prod.product.ncm;
				return this.database.$transaction([
					this.database.declarationInvoiceProduct.create({
						data: {
							invoice: inv.id,
							id: prod.id,
							name: prod.product.name,
							tid: prod.product.tid,
							description: prod.product.description,
							weight: prod.product.weight,
							length: prod.product.length,
							height: prod.product.height,
							width: prod.product.width,
							enable: true,
							event: "UPDATED",
							amount: FormatFloatNumberHelper.toPersist(prod.amount, 100),
							quantity: prod.quantity,
							productId: prod.product.id,
						},
					}),
					this.database.declarationInvoiceProductNCM.create({
						data: {
							product: prod.id,
							id: ncm.id,
							code: ncm.code,
							tax: ncm.tax,
							icms: ncm.icms,
							pis: ncm.pis,
							cofins: ncm.cofins,
							ipi: ncm.ipi,
							enable: true,
							event: "UPDATED",
						},
					}),
				]);
			}),
		);

		await this.database.$disconnect();
	}

	async retrieve(id: string): Promise<Declaration | null> {
		await this.database.$connect();
		const declaration = await this.database.declaration.findFirst({
			where: {
				id,
				enable: true,
			},
		});

		if (!declaration) return null;

		const invoice = await this.database.declarationInvoice.findFirst({
			where: {
				declaration: declaration.id,
				enable: true,
			},
		});

		const products = await this.database.declarationInvoiceProduct.findMany({
			where: {
				invoice: invoice?.id,
				enable: true,
			},
		});

		const ncms = await this.database.declarationInvoiceProductNCM.findMany({
			where: {
				enable: true,
				product: {
					in: products.map((p) => p.id),
				},
			},
		});

		const expenses = await this.database.declarationExpense.findMany({
			where: {
				declaration: declaration.id,
				enable: true,
			},
		});

		const result = Declaration.instance({
			createdAt: declaration.createdAt,
			expenses: expenses.map((e) =>
				ExpenseDeclaration.create({
					amount: FormatFloatNumberHelper.format(e.amount, 100),
					expense: Expense.instance({
						allocationMethod: e.allocationMethod,
						currency: e.currency,
						id: e.id,
						name: e.name,
						useCustomsBase: e.useCustomsBase,
						useICMSBase: e.useICMSBase,
					}),
				}),
			),
			id: declaration.id,
			quote: FormatFloatNumberHelper.format(declaration.quote, 10000),
			registration: declaration.registration,
			invoice: Invoice.instance({
				createdAt: invoice?.createdAt ?? new Date(),
				id: invoice?.id ?? "",
				quote: FormatFloatNumberHelper.format(invoice?.quote ?? 0, 10000),
				registration: invoice?.registration ?? "",
				products: products.map((p) => {
					const ncm = ncms.find((ncm) => ncm.product === p.id);
					return InvoiceProduct.create({
						amount: FormatFloatNumberHelper.format(p.amount, 100),
						quantity: p.quantity,
						id: p.id,
						product: Product.instance({
							description: p.description,
							height: p.height,
							id: p.productId,
							length: p.length,
							name: p.name,
							tid: p.tid,
							weight: p.weight,
							width: p.width,
							ncm: NCM.instance(
								ncm ?? {
									code: 0,
									cofins: 0,
									icms: 0,
									id: "",
									ipi: 0,
									pis: 0,
									tax: 0,
								},
							),
						}),
					});
				}),
			}),
		});
		await this.database.$disconnect();
		return result;
	}

	async list(): Promise<Declaration[]> {
		await this.database.$connect();

		const raw = await this.database.declaration.findMany({
			where: {
				enable: true,
			},
		});

		const declaration = await Promise.all(
			raw.map(async (declaration) => {
				const result = await this.retrieve(declaration.id);
				if (!result) return {} as Declaration;
				return result;
			}),
		);

		await this.database.$disconnect();

		return declaration;
	}

	async remove(id: string): Promise<void> {
		await this.database.$connect();

		const decl = await this.database.declaration.findFirst({
			where: { id, enable: true },
		});

		if (!decl) {
			await this.database.$disconnect();
			return;
		}

		const expenses = await this.database.declarationExpense.findMany({
			where: { declaration: decl.id, enable: true },
		});

		await Promise.all(
			expenses.map((exp) =>
				this.database.$transaction([
					this.database.declarationExpense.update({
						where: { declarationExpenseId: exp.declarationExpenseId },
						data: { enable: false },
					}),
					this.database.declarationExpense.create({
						data: {
							declaration: exp.declaration,
							id: exp.id,
							name: exp.name,
							useICMSBase: exp.useICMSBase,
							useCustomsBase: exp.useCustomsBase,
							allocationMethod: exp.allocationMethod,
							currency: exp.currency,
							amount: exp.amount,
							enable: false,
							event: "DELETED",
						},
					}),
				]),
			),
		);

		const invoices = await this.database.declarationInvoice.findMany({
			where: { declaration: decl.id, enable: true },
		});

		for (const inv of invoices) {
			const products = await this.database.declarationInvoiceProduct.findMany({
				where: { invoice: inv.id, enable: true },
			});

			await Promise.all(
				products.map((prod) =>
					this.database.$transaction([
						this.database.declarationInvoiceProduct.update({
							where: {
								declarationInvoiceProductId: prod.declarationInvoiceProductId,
							},
							data: { enable: false },
						}),
						this.database.declarationInvoiceProduct.create({
							data: {
								invoice: prod.invoice,
								id: prod.id,
								productId: prod.productId,
								name: prod.name,
								tid: prod.tid,
								description: prod.description,
								weight: prod.weight,
								length: prod.length,
								height: prod.height,
								width: prod.width,
								amount: prod.amount,
								quantity: prod.quantity,
								enable: false,
								event: "DELETED",
							},
						}),
					]),
				),
			);

			const ncms = await this.database.declarationInvoiceProductNCM.findMany({
				where: {
					product: { in: products.map((p) => p.id) },
					enable: true,
				},
			});

			await Promise.all(
				ncms.map((ncm) =>
					this.database.$transaction([
						this.database.declarationInvoiceProductNCM.update({
							where: {
								declarationInvoiceProductNCMId:
									ncm.declarationInvoiceProductNCMId,
							},
							data: { enable: false },
						}),
						this.database.declarationInvoiceProductNCM.create({
							data: {
								product: ncm.product,
								id: ncm.id,
								code: ncm.code,
								tax: ncm.tax,
								icms: ncm.icms,
								pis: ncm.pis,
								cofins: ncm.cofins,
								ipi: ncm.ipi,
								enable: false,
								event: "DELETED",
							},
						}),
					]),
				),
			);

			await this.database.$transaction([
				this.database.declarationInvoice.update({
					where: { declarationInvoiceId: inv.declarationInvoiceId },
					data: { enable: false },
				}),
				this.database.declarationInvoice.create({
					data: {
						declaration: inv.declaration,
						id: inv.id,
						registration: inv.registration,
						createdAt: inv.createdAt,
						quote: inv.quote,
						enable: false,
						event: "DELETED",
					},
				}),
			]);
		}

		await this.database.$transaction([
			this.database.declaration.update({
				where: { declarationId: decl.declarationId },
				data: { enable: false },
			}),
			this.database.declaration.create({
				data: {
					id: decl.id,
					registration: decl.registration,
					quote: decl.quote,
					createdAt: decl.createdAt,
					enable: false,
					event: "DELETED",
				},
			}),
		]);

		await this.database.$disconnect();
	}

	static instance(): DeclarationDatabaseRepository {
		return new DeclarationDatabaseRepository();
	}
}
