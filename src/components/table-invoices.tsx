"use client";
import { removeInvoiceAction } from "@/actions/invoice-action";
import { Checkbox } from "@/components/ui/checkbox";
import { Invoice } from "@/core/domain/entities/invoice";
import { Product } from "@/core/domain/entities/product";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_INVOICE } from "@/lib/modais";
import type { ColumnDef } from "@tanstack/react-table";
import { TableComponent } from "./table";
import { toast } from "sonner";

type InvoiceRaw = {
  id: string;
  registration: string;
  createdAt: Date;
  quote: number;
  products: {
    product: Product.Props;
    quantity: number;
    amount: number;
  }[];
};

type Props = {
  invoices: InvoiceRaw[];
};

const columns: ColumnDef<InvoiceRaw>[] = [
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
    header: "Número da invoice",
    accessorKey: "registration",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("registration")}</div>
    ),
    size: 180,
  },
  {
    header: "Data da invoice",
    accessorKey: "createdAt",
    cell: ({ row }) => (
      <div className="font-medium">
        {(row.getValue("createdAt") as Date).toLocaleDateString("pt-BR")}
      </div>
    ),
  },
  {
    header: "Cotação USD",
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
];

export const TableInvoices: React.FC<Props> = (props) => {
  const { setRegister } = useRegisterEdit();
  return (
    <TableComponent
      registers={props.invoices}
      defaultSortingColumn="registration"
      keyToSearch="registration"
      modalName={MODAL_CREATE_INVOICE}
      actionRemove={removeInvoiceAction}
      onChangeRegister={setRegister}
      columns={columns}
      onError={() => {
        toast.error(
          "Não foi possível excluir pois há declarações vinculadas a esses registros...",
          {
            position: "top-center",
          }
        );
      }}
    />
  );
};
