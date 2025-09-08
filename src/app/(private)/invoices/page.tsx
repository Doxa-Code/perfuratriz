import { listInvoiceAction } from "@/actions/invoice-action";
import { listProductAction } from "@/actions/product-action";
import { ButtonCreate } from "@/components/button-create";
import { ModalCreateInvoice } from "@/components/modal-create-invoice";
import { TableInvoices } from "@/components/table-invoices";
import { MODAL_CREATE_INVOICE } from "@/lib/modais";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices - Perfuratriz",
};

export default async function Invoices() {
  const [invoices, err1] = await listInvoiceAction();
  const [products, err2] = await listProductAction();

  console.log(err1);

  return (
    <main className="container mx-auto">
      <header className="flex w-full py-10 items-center justify-between">
        <h1 className="font-bold text-2xl">Invoices</h1>
        <ButtonCreate modalName={MODAL_CREATE_INVOICE} title="Novo invoice" />
      </header>
      <TableInvoices invoices={invoices ?? []} />
      <ModalCreateInvoice products={products ?? []} />
    </main>
  );
}
