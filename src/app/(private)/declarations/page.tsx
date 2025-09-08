import { listDeclarationAction } from "@/actions/declaration-action";
import { listExpenseAction } from "@/actions/expense-action";
import { listInvoiceAction } from "@/actions/invoice-action";
import { ButtonCreate } from "@/components/button-create";
import { ModalCreateDeclaration } from "@/components/modal-create-declaration";
import { TableDeclarations } from "@/components/table-declaration";
import { MODAL_CREATE_DECLARATION } from "@/lib/modais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Declarações (DI) - Perfuratriz",
};

export default async function Declarations() {
  const [declarations] = await listDeclarationAction();
  const [invoices] = await listInvoiceAction();
  const [expenses] = await listExpenseAction();

  return (
    <main className="container mx-auto">
      <header className="flex w-full py-10 items-center justify-between">
        <h1 className="font-bold text-2xl">Declarações</h1>
        <ButtonCreate
          modalName={MODAL_CREATE_DECLARATION}
          title="Nova declaração"
        />
      </header>
      <TableDeclarations declarations={declarations ?? []} />

      <ModalCreateDeclaration
        invoices={
          invoices?.map((i) => ({
            id: i.id,
            registration: i.registration,
            createdAt: i.createdAt,
            isVinculated: false,
          })) ?? []
        }
        expenses={expenses ?? []}
      />
    </main>
  );
}
