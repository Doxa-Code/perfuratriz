import { listCostAction } from "@/actions/cost-action";
import { ButtonCreate } from "@/components/button-create";
import { ModalCreateCost } from "@/components/modal-create-cost";
import { TableCost } from "@/components/table-cost";
import { MODAL_CREATE_COST } from "@/lib/modais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custos Administrativos - Perfuratriz",
};

export default async function Costs() {
  const [costs] = await listCostAction();
  return (
    <main className="container mx-auto">
      <header className="flex w-full py-10 items-center justify-between">
        <h1 className="font-bold text-2xl">Custos Administrativo</h1>
        <ButtonCreate modalName={MODAL_CREATE_COST} title="Novo Custo" />
      </header>
      <TableCost cost={costs ?? []} />
      <ModalCreateCost />
    </main>
  );
}
