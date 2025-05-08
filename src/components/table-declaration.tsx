"use client";
import { removeDeclarationAction } from "@/actions/declaration-action";
import { Checkbox } from "@/components/ui/checkbox";
import type { ProductNCM } from "@/core/domain/value-objects/product-ncm";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_DECLARATION } from "@/lib/modais";
import type { ColumnDef } from "@tanstack/react-table";
import { TableComponent } from "./table";

type Declaration = {
  id: string;
  registration: string;
  quote: number;
  createdAt: Date;
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
        {Number(row.getValue("quote")).toFixed(4)}
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
];

export const TableDeclarations: React.FC<Props> = (props) => {
  const { setRegister } = useRegisterEdit();
  return (
    <TableComponent
      registers={props.declarations}
      defaultSortingColumn="registration"
      keyToSearch="registration"
      modalName={MODAL_CREATE_DECLARATION}
      actionRemove={removeDeclarationAction}
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
    />
  );
};
