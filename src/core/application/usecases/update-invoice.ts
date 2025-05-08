import { Invoice } from "@/core/domain/entities/invoice";
import type { Product } from "@/core/domain/entities/product";
import { NotFound } from "@/core/domain/errors/not-found";
import { InvoiceProduct } from "@/core/domain/value-objects/invoice-product";
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
    private readonly productRepository: ProductRepository
  ) {}
  async execute(input: InputDTO) {
    const products = await Promise.all(
      input.products.map((p) => this.productRepository.retrieve(p.productId))
    );
    if (products.some((p) => p === null)) throw new NotFound("Product");
    const invoiceOld = await this.invoiceRepository.retrieve(input.id);
    if (!invoiceOld) return;
    const invoice = Invoice.instance({
      quote: input.quote ?? invoiceOld.quote,
      registration: input.registration ?? invoiceOld.registration,
      createdAt: input.createdAt ?? invoiceOld.createdAt,
      id: invoiceOld.id,
      products: invoiceOld.products,
      isVinculated: invoiceOld.isVinculated,
    });

    for (const p of input.products) {
      const product = products.find((item) => item?.id === p.productId);
      if (!product) continue;
      invoice.add(
        InvoiceProduct.create({
          amount: p.amount,
          product: product,
          quantity: p.quantity,
        })
      );
    }
    await this.invoiceRepository.update(invoice);
    return invoice;
  }

  static instance() {
    return new UpdateInvoice(
      InvoiceDatabaseRepository.instance(),
      ProductDatabaseRepository.instance()
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
