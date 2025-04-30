import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/value-objects/invoice-product";
import { PrismaClient } from "../../../../prisma";

interface InvoiceRepository {
  save(invoice: Invoice): Promise<void>;
  list(): Promise<Invoice[]>;
  remove(id: string): Promise<void>;
  retrieve(id: string): Promise<Invoice | null>;
}

export class InvoiceDatabaseRepository implements InvoiceRepository {
  private database = new PrismaClient().invoice;

  async retrieve(id: string): Promise<Invoice | null> {
    const invoice = await this.database.findUnique({
      where: { id },
      include: { products: true },
    });

    if (!invoice) return null;

    return Invoice.instance({
      createdAt: invoice.createdAt,
      id: invoice.id,
      products: invoice.products.map((p) =>
        InvoiceProduct.create({
          amount: p.amount,
          productId: p.productId,
          productName: p.productName,
          productVolume: p.productVolume,
          productWeight: p.productWeight,
          quantity: p.quantity,
        })
      ),
      quote: invoice.quote,
      registration: invoice.registration,
    });
  }

  async save(invoice: Invoice): Promise<void> {
    await this.database.create({
      data: {
        quote: invoice.quote,
        registration: invoice.registration,
        createdAt: invoice.createdAt,
        id: invoice.id,
        products: {
          create: invoice.products.map((p) => ({
            productId: p.productId,
            productName: p.productName,
            productVolume: p.productVolume,
            productWeight: p.productWeight,
            amount: p.amount,
            quantity: p.quantity,
          })),
        },
      },
    });
  }

  async list(): Promise<Invoice[]> {
    const response = await this.database.findMany({
      include: {
        products: true,
      },
    });

    return response.map((i) =>
      Invoice.instance({
        createdAt: i.createdAt,
        id: i.id,
        products: i.products.map((p) =>
          InvoiceProduct.create({
            amount: p.amount,
            productId: p.productId,
            productName: p.productName,
            productVolume: p.productVolume,
            productWeight: p.productWeight,
            quantity: p.quantity,
          })
        ),
        quote: i.quote,
        registration: i.registration,
      })
    );
  }

  async remove(id: string): Promise<void> {
    await this.database.delete({
      where: {
        id,
      },
    });
  }

  static instance() {
    return new InvoiceDatabaseRepository();
  }
}
