import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/lib/css/globals.css";
import { Providers } from "./providers";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfuratriz",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${plus_jakarta_sans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
