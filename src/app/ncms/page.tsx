import { listNCMAction } from "@/actions/ncm-action";
import { ButtonCreateNCM } from "@/components/button-create-ncm";
import { TableNCM } from "@/components/table-ncms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NCMs - Perfuratriz",
};

export default async function NCMs() {
  const [ncms] = await listNCMAction();
  return (
    <main className="container mx-auto">
      <header className="flex w-full py-10 items-center justify-between">
        <h1 className="font-bold text-2xl">Cadastro de NCMs</h1>
        <ButtonCreateNCM />
      </header>
      <TableNCM ncms={ncms ?? []} />
    </main>
  );
}
