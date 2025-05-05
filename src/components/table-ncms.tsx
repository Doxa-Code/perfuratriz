"use client";
import { removeNCMAction } from "@/actions/ncm-action";
import { Checkbox } from "@/components/ui/checkbox";
import type { NCM } from "@/core/domain/entities/ncm";
import { useNCM } from "@/lib/hooks/use-ncm";
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
    cell: ({ row }) => <div className="font-medium">{row.getValue("tax")}</div>,
    size: 180,
  },
  {
    header: "ICMS",
    accessorKey: "icms",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("icms")}</div>
    ),
    size: 180,
  },
  {
    header: "PIS",
    accessorKey: "pis",
    cell: ({ row }) => <div className="font-medium">{row.getValue("pis")}</div>,
    size: 180,
  },
  {
    header: "COFINS",
    accessorKey: "cofins",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("cofins")}</div>
    ),
    size: 180,
  },
  {
    header: "IPI",
    accessorKey: "ipi",
    cell: ({ row }) => <div className="font-medium">{row.getValue("ipi")}</div>,
    size: 180,
  },
];

export const TableNCM: React.FC<Props> = (props) => {
  const { setNCM } = useNCM();

  return (
    <TableComponent
      actionRemove={removeNCMAction}
      columns={columns}
      defaultSortingColumn="code"
      keyToSearch="code"
      modalName={MODAL_CREATE_NCM}
      onChangeRegister={setNCM}
      registers={props.ncms}
    />
  );
};
