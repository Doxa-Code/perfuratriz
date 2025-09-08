import { listExpenseAction } from "@/actions/expense-action";
import { ButtonCreate } from "@/components/button-create";
import { ModalCreateExpense } from "@/components/modal-create-expense";
import { TableExpenses } from "@/components/table-expenses";
import { MODAL_CREATE_EXPENSE } from "@/lib/modais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despesas - Perfuratriz",
};

export default async function Products() {
  const [expenses] = await listExpenseAction();
  return (
    <main className="container mx-auto">
      <header className="flex w-full py-10 items-center justify-between">
        <h1 className="font-bold text-2xl">Despesas</h1>
        <ButtonCreate modalName={MODAL_CREATE_EXPENSE} title="Nova despesa" />
      </header>
      <TableExpenses expenses={expenses ?? []} />
      <ModalCreateExpense />
    </main>
  );
}
