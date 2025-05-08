import { listNCMAction } from "@/actions/ncm-action";
import { ButtonCreate } from "@/components/button-create";
import { TableNCM } from "@/components/table-ncms";
import { MODAL_CREATE_NCM } from "@/lib/modais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NCMs - Perfuratriz",
};

export default async function NCMs() {
  const [ncms] = await listNCMAction();
  return (
    <main className="container mx-auto">
      <header className="flex w-full py-10 items-center justify-between">
        <h1 className="font-bold text-2xl">NCMs</h1>
        <ButtonCreate modalName={MODAL_CREATE_NCM} title="Novo NCM" />
      </header>
      <TableNCM ncms={ncms ?? []} />
    </main>
  );
}
