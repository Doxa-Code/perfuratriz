"use client";
import { removeProductAction } from "@/actions/product-action";
import { Checkbox } from "@/components/ui/checkbox";
import type { Product } from "@/core/domain/entities/product";
import type { ProductNCM } from "@/core/domain/value-objects/product-ncm";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_PRODUCT } from "@/lib/modais";
import type { ColumnDef } from "@tanstack/react-table";
import { TableComponent } from "./table";

type Props = {
	products: Product.Props[];
};

const columns: ColumnDef<Product.Props>[] = [
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
		header: "TID",
		accessorKey: "tid",
		cell: ({ row }) => <div className="font-medium">{row.getValue("tid")}</div>,
		size: 180,
	},
	{
		header: "Nome",
		accessorKey: "name",
		cell: ({ row }) => (
			<div className="font-medium">{row.getValue("name")}</div>
		),
		size: 180,
	},
	{
		header: "Código do NCM",
		accessorKey: "ncm",
		cell: ({ row }) => (
			<div className="font-medium">
				{(row.getValue("ncm") as ProductNCM)?.code}
			</div>
		),
	},
	{
		header: "Peso",
		accessorKey: "weight",
		cell: ({ row }) => (
			<div className="font-medium">
				{Number(row.getValue("weight")).toFixed(2)} Kg
			</div>
		),
	},
	{
		header: "Comprimento",
		accessorKey: "length",
		cell: ({ row }) => (
			<div className="font-medium">
				{Number(row.getValue("length")).toFixed(2)} mm
			</div>
		),
	},
	{
		header: "Altura",
		accessorKey: "height",
		cell: ({ row }) => (
			<div className="font-medium">
				{Number(row.getValue("height")).toFixed(2)} mm
			</div>
		),
	},
	{
		header: "Largura",
		accessorKey: "width",
		cell: ({ row }) => (
			<div className="font-medium">
				{Number(row.getValue("width")).toFixed(2)} mm
			</div>
		),
	},
];

export const TableProducts: React.FC<Props> = (props) => {
	const { setRegister } = useRegisterEdit();
	return (
		<TableComponent
			registers={props.products}
			defaultSortingColumn="name"
			keyToSearch="name"
			modalName={MODAL_CREATE_PRODUCT}
			actionRemove={removeProductAction}
			onChangeRegister={setRegister}
			columns={columns}
		/>
	);
};
