import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import { NCM } from "@/core/domain/entities/ncm";
import { Product } from "@/core/domain/entities/product";
import { createDatabaseConnection } from "../database";
import { invoiceEvents, invoiceProducts, invoices } from "../database/schemas";
import { eq, sql } from "drizzle-orm";

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
  status: "open" | "closed";
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
  async retrieve(id: string): Promise<Invoice | null> {
    const db = createDatabaseConnection();

    const [invoice] = await db.$client<InvoiceRaw[]>`
			SELECT 
        i.id,
        i.registration,
        i."createdAt",
        i.quote,
        i.status,
        COALESCE(jsonb_agg(
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
        ), '[]'::jsonb) AS products
      FROM perfuratriz.invoices i
      LEFT JOIN perfuratriz.invoice_products ip ON ip."invoiceId" = i.id
      LEFT JOIN perfuratriz.products p ON p.id = ip."productId"
      LEFT JOIN perfuratriz.ncms n ON n.id = p."ncmId"
      WHERE i.id = ${id}
      GROUP BY i.id, i.registration, i."createdAt", i.quote;
		`;

    if (!invoice) return null;

    return Invoice.instance({
      id: invoice.id,
      status: invoice.status,
      registration: invoice.registration,
      createdAt: new Date(invoice.createdAt),
      quote: FormatFloatNumberHelper.format(invoice.quote, 10000),
      products: invoice.products.map((p) =>
        InvoiceProduct.create({
          ...p,
          amount: FormatFloatNumberHelper.format(p.amount, 10000),
          product: Product.instance({
            ...p.product,
            ncm: NCM.instance(p.product.ncm),
          }),
        })
      ),
    });
  }

  async update(invoice: Invoice): Promise<void> {
    const db = createDatabaseConnection();
    try {
      await db.transaction(async (tx) => {
        await tx
          .update(invoices)
          .set({
            createdAt: invoice.createdAt,
            quote: FormatFloatNumberHelper.toPersist(invoice.quote, 10000),
            registration: invoice.registration,
          })
          .where(eq(invoices.id, invoice.id));
        await Promise.all(
          invoice.products.map(async (p) => {
            await tx
              .insert(invoiceProducts)
              .values({
                amount: BigInt(
                  FormatFloatNumberHelper.toPersist(p.amount, 10000)
                ),
                invoiceId: invoice.id,
                productId: p.product.id,
                quantity: p.quantity,
                id: p.id,
              })
              .onConflictDoUpdate({
                set: {
                  amount: sql`excluded.amount`,
                  invoiceId: sql`excluded."invoiceId"`,
                  productId: sql`excluded."productId"`,
                  quantity: sql`excluded.quantity`,
                },
                target: invoiceProducts.id,
              });
          })
        );
        await tx.insert(invoiceEvents).values({
          invoiceId: invoice.id,
          payload: invoice,
          type: "UPDATED",
        });
      });
    } catch (err) {
      console.error("Erro na atualização da invoice:");
      if (err instanceof Error) {
        console.error("Mensagem:", err);
      }
      // Se estiver usando pg diretamente via drizzle-pg:
      // console.error("Detalhes Postgres:", (err as any).cause);
      throw err; // se quiser propagar
    }
  }

  async save(invoice: Invoice): Promise<void> {
    const db = createDatabaseConnection();
    await db.transaction(async (tx) => {
      await tx.insert(invoices).values({
        createdAt: invoice.createdAt,
        quote: FormatFloatNumberHelper.toPersist(invoice.quote, 10000),
        registration: invoice.registration,
        id: invoice.id,
      });
      await Promise.all(
        invoice.products.map(async (p) => {
          await tx
            .insert(invoiceProducts)
            .values({
              amount: BigInt(
                FormatFloatNumberHelper.toPersist(p.amount, 10000)
              ),
              invoiceId: invoice.id,
              productId: p.product.id,
              quantity: p.quantity,
              id: p.id,
            })
            .onConflictDoUpdate({
              set: {
                amount: BigInt(
                  FormatFloatNumberHelper.toPersist(p.amount, 10000)
                ),
                invoiceId: invoice.id,
                productId: p.product.id,
                quantity: p.quantity,
              },
              target: invoices.id,
            });
        })
      );
      await tx.insert(invoiceEvents).values({
        invoiceId: invoice.id,
        payload: invoice,
        type: "CREATED",
      });
    });
  }

  async list(): Promise<Invoice[]> {
    const db = createDatabaseConnection();

    const allInvoices = await db.$client<InvoiceRaw[]>`
			SELECT 
        i.id,
        i.registration,
        i."createdAt",
        i.quote,
        i.status,
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
      FROM perfuratriz.invoices i
      LEFT JOIN perfuratriz.invoice_products ip 
        ON ip."invoiceId" = i.id
      LEFT JOIN perfuratriz.products p 
        ON p.id = ip."productId"
      LEFT JOIN perfuratriz.ncms n 
        ON n.id = p."ncmId"
      GROUP BY i.id, i.registration, i."createdAt", i.quote;
		`;

    return allInvoices.map((invoice) =>
      Invoice.instance({
        id: invoice.id,
        registration: invoice.registration,
        createdAt: new Date(invoice.createdAt),
        quote: FormatFloatNumberHelper.format(invoice.quote, 10000),
        status: invoice.status,
        products: invoice.products.map((p) =>
          InvoiceProduct.create({
            ...p,
            amount: FormatFloatNumberHelper.format(p.amount, 10000),
            product: Product.instance({
              ...p.product,
              ncm: NCM.instance(p.product.ncm),
            }),
          })
        ),
      })
    );
  }

  async remove(id: string): Promise<void> {
    const db = createDatabaseConnection();
    const invoice = await this.retrieve(id);
    if (!invoice) {
      return;
    }
    await db.transaction(async (tx) => {
      await tx.delete(invoices).where(eq(invoices.id, id));
      await tx.delete(invoiceProducts).where(eq(invoiceProducts.invoiceId, id));
      await tx.insert(invoiceEvents).values({
        invoiceId: invoice.id,
        payload: invoice,
        type: "DELETED",
      });
    });
  }

  static instance() {
    return new InvoiceDatabaseRepository();
  }
}
