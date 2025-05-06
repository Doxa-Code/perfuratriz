import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { listNCMAction } from "@/actions/ncm-action";
import { Menu } from "@/components/menu";
import { ModalCreateExpense } from "@/components/modal-create-expense";
import { ModalCreateNCM } from "@/components/modal-create-ncm";
import { ModalCreateProduct } from "@/components/modal-create-product";
import ReactQueryProvider from "@/components/react-query-provider";

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
        </ReactQueryProvider>
      </body>
    </html>
  );
}
