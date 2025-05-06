import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { listNCMAction } from "@/actions/ncm-action";
import { Menu } from "@/components/menu";
import { ModalCreateExpense } from "@/components/modal-create-expense";
import { ModalCreateNCM } from "@/components/modal-create-ncm";
import { ModalCreateProduct } from "@/components/modal-create-product";
import ReactQueryProvider from "@/components/react-query-provider";
import { ModalCreateInvoice } from "@/components/modal-create-invoice";
import { listProductAction } from "@/actions/product-action";

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
  const [ncms] = await listNCMAction();
  const [products] = await listProductAction();
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
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
