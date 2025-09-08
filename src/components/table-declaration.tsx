"use client";
import { removeDeclarationAction } from "@/actions/declaration-action";
import { Checkbox } from "@/components/ui/checkbox";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_DECLARATION } from "@/lib/modais";
import { cn } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import { File } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CloseDeclarationButton } from "./close-declaration-button";
import { TableComponent } from "./table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Declaration = {
  id: string;
  registration: string;
  quote: number;
  createdAt: Date;
  status: "open" | "closed";
  invoice: {
    id: string;
    registration: string;
    createdAt: Date;
    quote: number;
    products: {
      product: {
        id: string;
        name: string;
        ncm: {
          id: string;
          code: number;
          cofins: number;
          icms: number;
          ipi: number;
          pis: number;
          tax: number;
        };
        weight: number;
        length: number;
        height: number;
        width: number;
      };
      quantity: number;
      amount: number;
    }[];
  };
  expenses: {
    expense: {
      id: string;
      name: string;
      useICMSBase: boolean;
      useCustomsBase: boolean;
      allocationMethod: "NET_WEIGHT" | "NET_VALUE" | "PER_UNIT";
      currency: "USD" | "BRL";
    };
    amount: number;
  }[];
};

type Props = {
  declarations: Declaration[];
};

const columns: ColumnDef<Declaration>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all rows"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    size: 28,
    enableSorting: false,
  },
  {
    header: "Número da DI",
    accessorKey: "registration",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("registration")}</div>
    ),
    size: 180,
  },
  {
    header: "Data de registro",
    accessorKey: "createdAt",
    cell: ({ row }) => (
      <div className="font-medium">
        {(row.getValue("createdAt") as Date).toLocaleDateString("pt-BR")}
      </div>
    ),
  },
  {
    header: "Cotação final",
    accessorKey: "quote",
    cell: ({ row }) => (
      <div className="font-medium">
        {Number(row.getValue("quote")).toLocaleString("pt-BR", {
          currency: "USD",
          style: "currency",
          minimumFractionDigits: 4,
        })}
      </div>
    ),
  },
  {
    header: "Invoice",
    accessorKey: "invoice",
    cell: ({ row }) => (
      <div className="font-medium">
        {(row.getValue("invoice") as any)?.registration}
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge
        className={cn(
          "font-medium",
          row.getValue("status") === "closed" ? "bg-purple-500" : "bg-teal-500"
        )}
      >
        {row.getValue("status") === "closed" ? "Encerrado" : "Aberto"}
      </Badge>
    ),
  },
];

export const TableDeclarations: React.FC<Props> = (props) => {
  const [editDisabled, setEditDisabled] = useState(false);
  const { setRegister } = useRegisterEdit();
  return (
    <TableComponent
      registers={props.declarations}
      defaultSortingColumn="createdAt"
      defaultSorting="desc"
      keyToSearch="registration"
      modalName={MODAL_CREATE_DECLARATION}
      actionRemove={removeDeclarationAction}
      editDisabled={editDisabled}
      onChangeRegister={(original) => {
        const value = original
          ? {
              ...original,
              invoiceId: original.invoice.id,
              expenses: original.expenses.map((e) => ({
                ...e.expense,
                amount: e.amount,
              })),
            }
          : null;

        setRegister(value);
      }}
      columns={columns}
      customButtons={(rowsSelected, clearSelection) => {
        setEditDisabled(rowsSelected?.at(0)?.status === "closed");
        return (
          <div className="flex gap-3">
            <CloseDeclarationButton
              id={rowsSelected?.at(0)?.id!}
              hidden={!rowsSelected?.length || rowsSelected.length > 1}
              onActionClick={clearSelection}
            />
            <Link href={`/declarations/${rowsSelected?.at(0)?.id}`}>
              <Button
                data-hidden={!rowsSelected?.length || rowsSelected.length > 1}
                className="data-[hidden=true]:hidden bg-blue-600 hover:bg-blue-500"
              >
                <File />
                Resumo
              </Button>
            </Link>
          </div>
        );
      }}
    />
  );
};
