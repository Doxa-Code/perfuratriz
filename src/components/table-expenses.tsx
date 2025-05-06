"use client";
import { removeExpenseAction } from "@/actions/expense-action";
import { Checkbox } from "@/components/ui/checkbox";
import type { Expense } from "@/core/domain/entities/expense";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_EXPENSE } from "@/lib/modais";
import type { ColumnDef } from "@tanstack/react-table";
import { TableComponent } from "./table";

type Props = {
  expenses: Expense.Props[];
};

const allocationMethods = new Map<Expense.AllocationMethod, string>([
  ["PER_UNIT", "Por peça"],
  ["NET_VALUE", "Valor líquido"],
  ["NET_WEIGHT", "Peso líquido"],
]);

const columns: ColumnDef<Expense.Props>[] = [
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
    header: "Nome da despesa",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
    size: 180,
  },
  {
    header: "Base cálculo ICMS",
    accessorKey: "useICMSBase",
    cell: ({ row }) => (
      <div className="font-medium">
        {row.getValue("useICMSBase") ? "Sim" : "Não"}
      </div>
    ),
  },
  {
    header: "Base de cálculo para Valor Aduaneiro",
    accessorKey: "useCustomsBase",
    cell: ({ row }) => (
      <div className="font-medium">
        {row.getValue("useCustomsBase") ? "Sim" : "Não"}
      </div>
    ),
  },
  {
    header: "Forma de rateio",
    accessorKey: "allocationMethod",
    cell: ({ row }) => (
      <div className="font-medium">
        {allocationMethods.get(row.getValue("allocationMethod"))}
      </div>
    ),
  },
  {
    header: "Moeda",
    accessorKey: "currency",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("currency")}</div>
    ),
  },
];

export const TableExpenses: React.FC<Props> = (props) => {
  const { setRegister } = useRegisterEdit();
  return (
    <TableComponent
      registers={props.expenses}
      defaultSortingColumn="name"
      keyToSearch="name"
      modalName={MODAL_CREATE_EXPENSE}
      actionRemove={removeExpenseAction}
      onChangeRegister={setRegister}
      columns={columns}
    />
  );
};
