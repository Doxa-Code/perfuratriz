import { listProductAction } from "@/actions/product-action";
import { ButtonCreate } from "@/components/button-create";
import { TableProducts } from "@/components/table-products";
import { MODAL_CREATE_PRODUCT } from "@/lib/modais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos - Perfuratriz",
};

export default async function Products() {
  const [products] = await listProductAction();
  return (
    <main className="container mx-auto">
      <header className="flex w-full py-10 items-center justify-between">
        <h1 className="font-bold text-2xl">Produtos</h1>
        <ButtonCreate modalName={MODAL_CREATE_PRODUCT} title="Novo Produto" />
      </header>
      <TableProducts products={products ?? []} />
    </main>
  );
}
