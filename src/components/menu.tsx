"use client";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { User } from "@/core/domain/entities/user";
import { cn } from "@/lib/utils";
import {
  BanknoteArrowDown,
  BookText,
  Box,
  DollarSign,
  FileAxis3dIcon,
  Files,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { type ReactNode } from "react";
import { NavUser } from "./nav-user";

type Props = {
  children: ReactNode;
  userAuthenticate: User.Raw;
};

export const Menu: React.FC<Props> = (props) => {
  const links = [
    {
      label: "NCMs",
      href: "/ncms",
      icon: (
        <BookText className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "ICMS",
      href: "/icms",
      icon: (
        <DollarSign className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Produtos",
      href: "/products",
      icon: (
        <Box className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Despesas",
      href: "/expenses",
      icon: (
        <BanknoteArrowDown className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Invoices",
      href: "/invoices",
      icon: (
        <Files className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Declarações (DI)",
      href: "/declarations",
      icon: (
        <FileAxis3dIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-white dark:bg-neutral-800 flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen w-full"
      )}
    >
      <Sidebar open={true}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <NavUser user={props.userAuthenticate} />
        </SidebarBody>
      </Sidebar>
      <div className="w-full shadow h-screen p-10 flex-1 overflow-auto">
        {props.children}
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <div className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <span className="font-medium text-black whitespace-pre">Perfuratriz</span>
    </div>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
