import { Declaration } from "@/core/domain/entities/declaration";
import type { Expense } from "@/core/domain/entities/expense";
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration";
import type { Invoice } from "@/core/domain/entities/invoice";
import { NotFound } from "@/core/domain/errors/not-found";
import { DeclarationDatabaseRepository } from "@/core/infra/repositories/declaration-repository";
import { ExpenseDatabaseRepository } from "@/core/infra/repositories/expense-repository";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";

interface InvoiceRepository {
  retrieve(id: string): Promise<Invoice | null>;
}

interface ExpenseRepository {
  retrieve(id: string): Promise<Expense | null>;
}

interface DeclarationRepository {
  save(declaration: Declaration): Promise<void>;
}

export class CreateDeclaration {
  constructor(
    private readonly declarationRepository: DeclarationRepository,
    private readonly invoiceRepository: InvoiceRepository,
    private readonly expenseRepository: ExpenseRepository
  ) {}

  async execute(input: InputDTO) {
    const invoice = await this.invoiceRepository.retrieve(input.invoiceId);
    if (!invoice) throw new NotFound("Invoice");

    const declaration = Declaration.create({
      registration: input.registration,
      quote: input.quote,
      invoice,
    });

    for (const e of input.expenses) {
      const expense = await this.expenseRepository.retrieve(e.id);
      if (!expense) throw new NotFound("Expense");
      declaration.addExpense(
        ExpenseDeclaration.create({
          expense,
          amount: e.amount,
        })
      );
    }

    await this.declarationRepository.save(declaration);
    return declaration;
  }

  static instance() {
    return new CreateDeclaration(
      DeclarationDatabaseRepository.instance(),
      InvoiceDatabaseRepository.instance(),
      ExpenseDatabaseRepository.instance()
    );
  }
}

type InputDTO = {
  registration: string;
  quote: number;
  invoiceId: string;
  expenses: {
    id: string;
    amount: number;
  }[];
};
