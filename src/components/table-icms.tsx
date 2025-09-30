"use client";
import { removeICMSAction } from "@/actions/icms-action";
import { Checkbox } from "@/components/ui/checkbox";
import { ICMS } from "@/core/domain/entities/icms";
import type { NCM } from "@/core/domain/entities/ncm";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_ICMS } from "@/lib/modais";
import type { ColumnDef } from "@tanstack/react-table";
import { TableComponent } from "./table";

type Props = {
  icms: ICMS.Props[];
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
    header: "Estado",
    accessorKey: "stateLabel",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("stateLabel")}</div>
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
];

export const TableICMS: React.FC<Props> = (props) => {
  const { setRegister } = useRegisterEdit();

  return (
    <TableComponent
      actionRemove={removeICMSAction}
      columns={columns}
      defaultSortingColumn="stateLabel"
      keyToSearch="stateLabel"
      modalName={MODAL_CREATE_ICMS}
      onChangeRegister={setRegister}
      registers={props.icms}
    />
  );
};
