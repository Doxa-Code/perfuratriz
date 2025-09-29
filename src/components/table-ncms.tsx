"use client";
import { removeNCMAction } from "@/actions/ncm-action";
import { Checkbox } from "@/components/ui/checkbox";
import type { NCM } from "@/core/domain/entities/ncm";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_NCM } from "@/lib/modais";
import type { ColumnDef } from "@tanstack/react-table";
import { TableComponent } from "./table";

type Props = {
  ncms: NCM.Props[];
};

const columns: ColumnDef<NCM.Props>[] = [
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
    header: "Código NCM",
    accessorKey: "code",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("code")}</div>
    ),
    size: 180,
  },
  {
    header: "Imposto de importação",
    accessorKey: "tax",
    cell: ({ row }) => (
      <div className="font-medium">
        {Number(row.getValue("tax")).toFixed(2).replace(".", ",")}%
      </div>
    ),
    size: 180,
  },
  {
    header: "ICMS",
    accessorKey: "icms",
    cell: ({ row }) => (
      <div className="font-medium">
        {Number(row.getValue("icms")).toFixed(2).replace(".", ",")}%
      </div>
    ),
    size: 180,
  },
  {
    header: "PIS (Compra)",
    accessorKey: "pis",
    cell: ({ row }) => (
      <div className="font-medium">
        {Number(row.getValue("pis")).toFixed(2).replace(".", ",")}%
      </div>
    ),
    size: 180,
  },
  {
    header: "COFINS (Compra)",
    accessorKey: "cofins",
    cell: ({ row }) => (
      <div className="font-medium">
        {Number(row.getValue("cofins")).toFixed(2).replace(".", ",")}%
      </div>
    ),
    size: 180,
  },
  {
    header: "PIS (Venda)",
    accessorKey: "pisSales",
    cell: ({ row }) => (
      <div className="font-medium">
        {Number(row.getValue("pisSales")).toFixed(2).replace(".", ",")}%
      </div>
    ),
    size: 180,
  },
  {
    header: "COFINS (Venda)",
    accessorKey: "cofinsSales",
    cell: ({ row }) => (
      <div className="font-medium">
        {Number(row.getValue("cofinsSales")).toFixed(2).replace(".", ",")}%
      </div>
    ),
    size: 180,
  },
  {
    header: "IPI",
    accessorKey: "ipi",
    cell: ({ row }) => (
      <div className="font-medium">
        {Number(row.getValue("ipi")).toFixed(2).replace(".", ",")}%
      </div>
    ),
    size: 180,
  },
];

export const TableNCM: React.FC<Props> = (props) => {
  const { setRegister } = useRegisterEdit();

  return (
    <TableComponent
      actionRemove={removeNCMAction}
      columns={columns}
      defaultSortingColumn="code"
      keyToSearch="code"
      modalName={MODAL_CREATE_NCM}
      onChangeRegister={setRegister}
      registers={props.ncms}
    />
  );
};
