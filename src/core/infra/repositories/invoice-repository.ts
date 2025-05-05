import { Invoice } from "@/core/domain/entities/invoice";
import { NCM } from "@/core/domain/entities/ncm";
import { Product } from "@/core/domain/entities/product";
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
          product: Product.instance({
            height: p.productHeight,
            length: p.productHeight,
            name: p.productName,
            ncm: NCM.create({
              code: p.ncmCode,
              cofins: p.ncmCofins,
              icms: p.ncmIcms,
              ipi: p.ncmIpi,
              pis: p.ncmPis,
              tax: p.ncmTax,
            }),
            weight: p.productWeight,
            width: p.productWidth,
            id: p.productId,
          }),
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
            productId: p.product.id,
            productName: p.product.name,
            productWeight: p.product.weight,
            productLength: p.product.length,
            productHeight: p.product.height,
            productWidth: p.product.width,
            ncmCode: p.product.ncm.code,
            ncmCofins: p.product.ncm.cofins,
            ncmIcms: p.product.ncm.icms,
            ncmIpi: p.product.ncm.ipi,
            ncmPis: p.product.ncm.pis,
            ncmTax: p.product.ncm.tax,
            quantity: p.quantity,
            amount: p.amount,
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

    return response.map((invoice) =>
      Invoice.instance({
        createdAt: invoice.createdAt,
        id: invoice.id,
        products: invoice.products.map((p) =>
          InvoiceProduct.create({
            amount: p.amount,
            product: Product.instance({
              id: p.productId,
              height: p.productHeight,
              length: p.productHeight,
              name: p.productName,
              ncm: NCM.create({
                code: p.ncmCode,
                cofins: p.ncmCofins,
                icms: p.ncmIcms,
                ipi: p.ncmIpi,
                pis: p.ncmPis,
                tax: p.ncmTax,
              }),
              weight: p.productWeight,
              width: p.productWidth,
            }),
            quantity: p.quantity,
          })
        ),
        quote: invoice.quote,
        registration: invoice.registration,
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
