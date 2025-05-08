import { Declaration } from "@/core/domain/entities/declaration";
import { Expense } from "@/core/domain/entities/expense";
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration";
import { Invoice } from "@/core/domain/entities/invoice";
import { NCM } from "@/core/domain/entities/ncm";
import { Product } from "@/core/domain/entities/product";
import { InvoiceProduct } from "@/core/domain/value-objects/invoice-product";
import { PrismaClient } from "../../../../prisma";

interface DeclarationRepository {
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
        quote: declaration.quote,
        invoiceId: declaration.invoice.id,
        expenses: {
          create: declaration.expenses.map((expense) => ({
            name: expense.expense.name,
            useICMSBase: expense.expense.useICMSBase,
            useCustomsBase: expense.expense.useCustomsBase,
            allocationMethod: expense.expense.allocationMethod,
            currency: expense.expense.currency,
            amount: expense.amount,
          })),
        },
      },
    });
    await this.database.$disconnect();
  }

  async update(declaration: Declaration): Promise<void> {
    await this.database.$connect();
    const expenseDeclarationIds =
      await this.database.expenseDeclaration.findMany({
        where: {
          declarationId: declaration.id,
        },
        select: {
          id: true,
        },
      });
    await this.database.$transaction([
      this.database.declaration.update({
        data: {
          id: declaration.id,
          registration: declaration.registration,
          quote: declaration.quote,
          invoiceId: declaration.invoice.id,
          expenses: {
            create: declaration.expenses.map((expense) => ({
              name: expense.expense.name,
              useICMSBase: expense.expense.useICMSBase,
              useCustomsBase: expense.expense.useCustomsBase,
              allocationMethod: expense.expense.allocationMethod,
              currency: expense.expense.currency,
              amount: expense.amount,
            })),
          },
        },
        where: { id: declaration.id },
      }),
      this.database.expenseDeclaration.deleteMany({
        where: {
          id: {
            in: expenseDeclarationIds.map((ed) => ed.id),
          },
        },
      }),
    ]);
    await this.database.$disconnect();
  }

  async retrieve(id: string): Promise<Declaration | null> {
    await this.database.$connect();
    const result = await this.database.declaration.findUnique({
      where: { id },
      include: {
        invoice: {
          include: { products: true },
        },
        expenses: true,
      },
    });
    await this.database.$disconnect();
    if (!result) return null;

    return Declaration.instance({
      id: result.id,
      registration: result.registration,
      quote: result.quote,
      createdAt: result.createdAt,
      invoice: Invoice.instance({
        createdAt: result.invoice.createdAt,
        id: result.invoice.id,
        isVinculated: true,
        products: result.invoice.products.map((p) =>
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
        quote: result.quote,
        registration: result.registration,
      }),
      expenses: result.expenses.map((e) =>
        ExpenseDeclaration.create({
          expense: Expense.create({
            allocationMethod: e.allocationMethod,
            currency: e.currency,
            name: e.name,
            useCustomsBase: e.useCustomsBase,
            useICMSBase: e.useICMSBase,
          }),
          amount: e.amount,
        })
      ),
    });
  }

  async list(): Promise<Declaration[]> {
    await this.database.$connect();

    const declarations = await this.database.declaration.findMany({
      include: {
        invoice: {
          include: { products: true },
        },
        expenses: true,
      },
    });

    await this.database.$disconnect();

    return declarations.map((result) =>
      Declaration.instance({
        id: result.id,
        registration: result.registration,
        quote: result.quote,
        createdAt: result.createdAt,
        invoice: Invoice.instance({
          createdAt: result.invoice.createdAt,
          id: result.invoice.id,
          isVinculated: true,
          products: result.invoice.products.map((p) =>
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
          quote: result.quote,
          registration: result.registration,
        }),
        expenses: result.expenses.map((e) =>
          ExpenseDeclaration.create({
            expense: Expense.create({
              allocationMethod: e.allocationMethod,
              currency: e.currency,
              name: e.name,
              useCustomsBase: e.useCustomsBase,
              useICMSBase: e.useICMSBase,
            }),
            amount: e.amount,
          })
        ),
      })
    );
  }

  async remove(id: string): Promise<void> {
    await this.database.$connect();
    await this.database.declaration.delete({
      where: { id },
    });
    await this.database.$disconnect();
  }

  static instance() {
    return new DeclarationDatabaseRepository();
  }
}
