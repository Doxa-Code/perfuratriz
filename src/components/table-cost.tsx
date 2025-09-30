"use client";
import { removeCostAction } from "@/actions/cost-action";
import { Checkbox } from "@/components/ui/checkbox";
import { Cost } from "@/core/domain/entities/cost";
import type { NCM } from "@/core/domain/entities/ncm";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_COST } from "@/lib/modais";
import type { ColumnDef } from "@tanstack/react-table";
import { TableComponent } from "./table";

type Props = {
  cost: Cost.Props[];
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
    header: "Descrição",
    accessorKey: "description",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("description")}</div>
    ),
    size: 180,
  },
  {
    header: "Valor R$",
    accessorKey: "value",
    cell: ({ row }) => (
      <div className="font-medium">
        {Number(row.getValue("value")).toLocaleString("pt-BR", {
          currency: "BRL",
          style: "currency",
        })}
      </div>
    ),
    size: 180,
  },
];

export const TableCost: React.FC<Props> = (props) => {
  const { setRegister } = useRegisterEdit();

  return (
    <TableComponent
      actionRemove={removeCostAction}
      columns={columns}
      defaultSortingColumn="description"
      keyToSearch="description"
      modalName={MODAL_CREATE_COST}
      onChangeRegister={setRegister}
      registers={props.cost}
    />
  );
};
