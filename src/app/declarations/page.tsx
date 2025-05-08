import { listDeclarationAction } from "@/actions/declaration-action";
import { ButtonCreate } from "@/components/button-create";
import { TableDeclarations } from "@/components/table-declaration";
import { MODAL_CREATE_DECLARATION } from "@/lib/modais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Declarações (DI) - Perfuratriz",
};

export default async function Declarations() {
  const [declarations] = await listDeclarationAction();
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
    </main>
  );
}
