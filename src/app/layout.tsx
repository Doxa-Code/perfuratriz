import { listNCMAction } from "@/actions/ncm-action";
import { listProductAction } from "@/actions/product-action";
import { Menu } from "@/components/menu";
import { ModalCreateExpense } from "@/components/modal-create-expense";
import { ModalCreateInvoice } from "@/components/modal-create-invoice";
import { ModalCreateNCM } from "@/components/modal-create-ncm";
import { ModalCreateProduct } from "@/components/modal-create-product";
import ReactQueryProvider from "@/components/react-query-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { listExpenseAction } from "@/actions/expense-action";
import { listInvoiceAction } from "@/actions/invoice-action";
import { ModalCreateDeclaration } from "@/components/modal-create-declaration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perfuratriz",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [[ncms], [products], [invoices], [expenses]] = await Promise.all([
    listNCMAction(),
    listProductAction(),
    listInvoiceAction(),
    listExpenseAction(),
  ]);

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <Menu>{children}</Menu>
          <ModalCreateNCM />
          <ModalCreateProduct ncms={ncms ?? []} />
          <ModalCreateExpense />
          <ModalCreateInvoice products={products ?? []} />
          <ModalCreateDeclaration
            invoices={
              invoices?.map((i) => ({
                id: i.id,
                registration: i.registration,
                createdAt: i.createdAt,
                isVinculated: i.isVinculated,
              })) ?? []
            }
            expenses={expenses ?? []}
          />
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
