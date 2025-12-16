import { listProductAction } from "@/actions/product-action";
import { listSaleTableAction } from "@/actions/sale-table-action";
import { ButtonCreate } from "@/components/button-create";
import { ModalCreateSale } from "@/components/modal-create-sale";
import { TableSales } from "@/components/table-sales";
import { MODAL_CREATE_SALE_TABLE } from "@/lib/modais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabela de Venda - Perfuratriz",
};

export default async function SaleTablesPage() {
  const [sales] = await listSaleTableAction();
  const [products] = await listProductAction();

  return (
    <main className="container mx-auto">
      <header className="flex w-full items-center justify-between py-10">
        <div>
          <h1 className="font-bold text-2xl">Tabela de Venda</h1>
        </div>
        <ButtonCreate modalName={MODAL_CREATE_SALE_TABLE} title="Nova tabela" />
      </header>
      <TableSales sales={sales ?? []} />
      <ModalCreateSale
        products={(products ?? []).map((p) => ({
          ...p,
          description: p.description ?? "",
          volume: Math.trunc(p.length * p.height * p.width * 100) / 100,
        }))}
      />
    </main>
  );
}
