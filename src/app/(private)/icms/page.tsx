import { listICMSAction } from "@/actions/icms-action";
import { ButtonCreate } from "@/components/button-create";
import { ModalCreateICMS } from "@/components/modal-create-icms";
import { TableICMS } from "@/components/table-icms";
import { MODAL_CREATE_ICMS } from "@/lib/modais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICMS por Estado - Perfuratriz",
};

export default async function ICMSs() {
  const [icms] = await listICMSAction();
  return (
    <main className="container mx-auto">
      <header className="flex w-full py-10 items-center justify-between">
        <h1 className="font-bold text-2xl">ICMS por Estado</h1>
        <ButtonCreate modalName={MODAL_CREATE_ICMS} title="Novo ICMS" />
      </header>
      <TableICMS icms={icms ?? []} />
      <ModalCreateICMS />
    </main>
  );
}
