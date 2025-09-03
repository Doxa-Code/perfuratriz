"use server";
import { CreateDeclaration } from "@/core/application/usecases/create-declaration";
import { Declaration } from "@/core/domain/entities/declaration";
import { Expense } from "@/core/domain/entities/expense";
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration";
import { DeclarationDatabaseRepository } from "@/core/infra/repositories/declaration-repository";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import {
  createDeclarationInputSchema,
  listDeclarationOutputSchema,
  removeDeclarationInputSchema,
  retrieveDeclarationInputSchema,
  retrieveDeclarationOutputSchema,
} from "./declaration-schema";

const declarationRepository = DeclarationDatabaseRepository.instance();
const invoicesRepository = InvoiceDatabaseRepository.instance();

export const createDeclarationAction = createServerAction()
  .input(createDeclarationInputSchema)
  .handler(async ({ input }) => {
    if (!input.id) {
      const createDeclaration = CreateDeclaration.instance();
      await createDeclaration.execute(input);
      revalidatePath("/declarations", "page");
      return;
    }
    const invoice = await invoicesRepository.retrieve(input.invoiceId);
    if (!invoice) return;
    const declaration = Declaration.instance({
      createdAt: input.createdAt ?? new Date(),
      expenses: input.expenses.map((e) =>
        ExpenseDeclaration.create({
          amount: e.amount,
          expense: Expense.create({
            allocationMethod: e.allocationMethod,
            currency: e.currency,
            name: e.name,
            useCustomsBase: e.useCustomsBase,
            useICMSBase: e.useICMSBase,
          }),
        })
      ),
      id: input.id,
      invoice,
      quote: input.quote,
      registration: input.registration,
    });
    await declarationRepository.update(declaration).catch(console.log);
    revalidatePath("/declarations", "page");
  });

export const listDeclarationAction = createServerAction()
  .output(listDeclarationOutputSchema)
  .handler(async () => {
    const result = await declarationRepository.list();
    return result;
  });

export const retrieveDeclarationAction = createServerAction()
  .input(retrieveDeclarationInputSchema)
  .output(retrieveDeclarationOutputSchema)
  .handler(async ({ input }) => {
    const declaration = await declarationRepository.retrieve(input.id);
    if (!declaration) return null;
    return declaration;
  });

export const removeDeclarationAction = createServerAction()
  .input(removeDeclarationInputSchema)
  .handler(async ({ input }) => {
    await Promise.all(input.ids.map((id) => declarationRepository.remove(id)));
    revalidatePath("/declarations", "page");
  });
