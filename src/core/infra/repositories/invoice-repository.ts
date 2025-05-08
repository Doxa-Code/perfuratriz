import { Invoice } from "@/core/domain/entities/invoice";
import { NCM } from "@/core/domain/entities/ncm";
import { Product } from "@/core/domain/entities/product";
import { InvoiceProduct } from "@/core/domain/value-objects/invoice-product";
import { PrismaClient } from "../../../../prisma";

interface InvoiceRepository {
  save(invoice: Invoice): Promise<void>;
  update(invoice: Invoice): Promise<void>;
  list(): Promise<Invoice[]>;
  remove(id: string): Promise<void>;
  retrieve(id: string): Promise<Invoice | null>;
}

export class InvoiceDatabaseRepository implements InvoiceRepository {
  private database = new PrismaClient();

  async retrieve(id: string): Promise<Invoice | null> {
    await this.database.$connect();
    const invoice = await this.database.invoice.findUnique({
      where: { id },
      include: {
        products: true,
        declaration: {
          select: {
            id: true,
          },
        },
      },
    });

    await this.database.$disconnect();

    if (!invoice) return null;

    return Invoice.instance({
      createdAt: invoice.createdAt,
      id: invoice.id,
      isVinculated: Boolean(invoice.declaration?.id),
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

  async update(invoice: Invoice): Promise<void> {
    await this.database.$connect();

    const invoiceProducts = await this.database.invoiceProduct.findMany({
      where: {
        invoiceId: invoice.id,
      },
      select: {
        id: true,
      },
    });

    await this.database.$transaction([
      this.database.invoice.update({
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
        where: {
          id: invoice.id,
        },
      }),
      this.database.invoiceProduct.deleteMany({
        where: {
          id: {
            in: invoiceProducts.map((ip) => ip.id),
          },
        },
      }),
    ]);

    await this.database.$disconnect();
  }

  async save(invoice: Invoice): Promise<void> {
    await this.database.$connect();
    await this.database.invoice.create({
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
    await this.database.$disconnect();
  }

  async list(): Promise<Invoice[]> {
    await this.database.$connect();

    const response = await this.database.invoice.findMany({
      include: {
        products: true,
        declaration: {
          select: {
            id: true,
          },
        },
      },
    });

    await this.database.$disconnect();

    return response.map((invoice) =>
      Invoice.instance({
        createdAt: invoice.createdAt,
        id: invoice.id,
        isVinculated: Boolean(invoice.declaration?.id),
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
    await this.database.$connect();
    await this.database.invoice.delete({
      where: {
        id,
      },
    });
    await this.database.$disconnect();
  }

  static instance() {
    return new InvoiceDatabaseRepository();
  }
}
