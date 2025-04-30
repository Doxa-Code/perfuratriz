import { Declaration } from "@/core/domain/entities/declaration";
import { Expense } from "@/core/domain/entities/expense";
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration";
import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/value-objects/invoice-product";
import { PrismaClient } from "../../../../prisma";

interface DeclarationRepository {
  save(declaration: Declaration): Promise<void>;
  retrieve(id: string): Promise<Declaration | null>;
  list(): Promise<Declaration[]>;
  remove(id: string): Promise<void>;
}

export class DeclarationDatabaseRepository implements DeclarationRepository {
  private prisma = new PrismaClient();

  async save(declaration: Declaration): Promise<void> {
    await this.prisma.declaration.create({
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
  }

  async retrieve(id: string): Promise<Declaration | null> {
    const result = await this.prisma.declaration.findUnique({
      where: { id },
      include: {
        invoice: {
          include: { products: true },
        },
        expenses: true,
      },
    });

    if (!result) return null;

    return Declaration.instance({
      id: result.id,
      registration: result.registration,
      quote: result.quote,
      invoice: Invoice.instance({
        createdAt: result.invoice.createdAt,
        id: result.invoice.id,
        products: result.invoice.products.map(InvoiceProduct.create),
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
    const declarations = await this.prisma.declaration.findMany({
      include: {
        invoice: {
          include: { products: true },
        },
        expenses: true,
      },
    });

    return declarations.map((result) =>
      Declaration.instance({
        id: result.id,
        registration: result.registration,
        quote: result.quote,
        invoice: Invoice.instance({
          createdAt: result.invoice.createdAt,
          id: result.invoice.id,
          products: result.invoice.products.map(InvoiceProduct.create),
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
    await this.prisma.declaration.delete({
      where: { id },
    });
  }

  static instance() {
    return new DeclarationDatabaseRepository();
  }
}
