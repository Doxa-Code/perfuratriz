import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import type { Product } from "@/core/domain/entities/product";
import { NotFound } from "@/core/domain/errors/not-found";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";

interface InvoiceRepository {
	save(invoice: Invoice): Promise<void>;
}

interface ProductRepository {
	retrieve(id: string): Promise<Product | null>;
}

export class CreateInvoice {
	constructor(
		private readonly invoiceRepository: InvoiceRepository,
		private readonly productRepository: ProductRepository,
	) {}
	async execute(input: InputDTO) {
		const products = await Promise.all(
			input.products.map((p) => this.productRepository.retrieve(p.productId)),
		);
		if (products.some((p) => p === null)) throw new NotFound("Product");
		const invoice = Invoice.create({
			quote: input.quote,
			registration: input.registration,
			createdAt: input.createdAt,
		});
		for (const p of input.products) {
			const product = products.find((item) => item?.id === p.productId);
			if (!product) continue;
			invoice.add(
				InvoiceProduct.create({
					amount: p.amount,
					product: product,
					quantity: p.quantity,
				}),
			);
		}
		await this.invoiceRepository.save(invoice);
		return invoice;
	}

	static instance() {
		return new CreateInvoice(
			InvoiceDatabaseRepository.instance(),
			ProductDatabaseRepository.instance(),
		);
	}
}

type InputDTO = {
	registration: string;
	quote: number;
	createdAt?: Date;
	products: {
		productId: string;
		quantity: number;
		amount: number;
	}[];
};
