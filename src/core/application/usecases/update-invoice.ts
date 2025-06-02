import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import type { Product } from "@/core/domain/entities/product";
import { NotFound } from "@/core/domain/errors/not-found";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";

interface InvoiceRepository {
	retrieve(id: string): Promise<Invoice | null>;
	update(invoice: Invoice): Promise<void>;
}

interface ProductRepository {
	retrieve(id: string): Promise<Product | null>;
}

export class UpdateInvoice {
	constructor(
		private readonly invoiceRepository: InvoiceRepository,
		private readonly productRepository: ProductRepository,
	) {}
	async execute(input: InputDTO) {
		const products = await Promise.all(
			input.products.map((p) => this.productRepository.retrieve(p.productId)),
		);

		if (products.some((p) => p === null)) throw new NotFound("Product");

		const invoiceOld = await this.invoiceRepository.retrieve(input.id);

		if (!invoiceOld) throw new NotFound("Invoice");

		const invoice = Invoice.instance({
			quote: input.quote ?? invoiceOld.quote,
			registration: input.registration ?? invoiceOld.registration,
			createdAt: invoiceOld.createdAt,
			id: invoiceOld.id,
			products: [],
		});

		const invoiceProductsOld = invoiceOld.products.filter((p) =>
			input.products.map((prod) => prod.productId).includes(p.product.id),
		);

		for (const p of input.products) {
			const product = products.find((item) => item?.id === p.productId);
			if (!product) continue;
			const invoiceProductOld = invoiceProductsOld.find(
				(ipo) => ipo.product.id === p.productId,
			);

			invoice.add(
				InvoiceProduct.create({
					id: invoiceProductOld?.id ?? undefined,
					amount: p.amount,
					product: product,
					quantity: p.quantity,
				}),
			);
		}
		await this.invoiceRepository.update(invoice);
		return invoice;
	}

	static instance() {
		return new UpdateInvoice(
			InvoiceDatabaseRepository.instance(),
			ProductDatabaseRepository.instance(),
		);
	}
}

type InputDTO = {
	id: string;
	registration: string;
	quote: number;
	createdAt?: Date;
	products: {
		productId: string;
		quantity: number;
		amount: number;
	}[];
};
