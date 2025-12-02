"use client";

import { removeSaleTableAction } from "@/actions/sale-table-action";
import { saleTableSchema } from "@/actions/sale-table-schema";
import { Checkbox } from "@/components/ui/checkbox";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_SALE_TABLE } from "@/lib/modais";
import { TableComponent } from "@/components/table";
import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { z } from "zod";

type SaleTableRow = z.infer<typeof saleTableSchema>;
type SaleTableTableRow = SaleTableRow & {
  productName: string;
  productTid: string;
  productDescription: string;
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const columns: ColumnDef<SaleTableTableRow>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar todas"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Selecionar linha"
      />
    ),
    size: 28,
    enableSorting: false,
  },
  {
    header: "Produto",
    accessorKey: "productName",
    cell: ({ row }) => <div className="font-medium">{row.original.product.name}</div>,
    size: 200,
  },
  {
    header: "TID",
    accessorKey: "productTid",
    cell: ({ row }) => <div className="font-medium">{row.original.product.tid}</div>,
    size: 140,
  },
  {
    header: "Descrição",
    accessorKey: "productDescription",
    cell: ({ row }) => (
      <div className="font-medium max-w-[280px] truncate">
        {row.original.product.description}
      </div>
    ),
  },
  {
    header: "Última importação",
    accessorKey: "lastImportationAt",
    cell: ({ row }) => (
      <div className="flex flex-col text-sm">
        <span>
          {row.original.lastImportationAt
            ? format(row.original.lastImportationAt, "dd/MM/yyyy", { locale: ptBR })
            : "Sem registros"}
        </span>
        {row.original.lastImportationQuote !== null && (
          <span className="text-muted-foreground">
            Cotação {currencyFormatter.format(row.original.lastImportationQuote)}
          </span>
        )}
      </div>
    ),
  },
  {
    header: "Cotação dólar",
    accessorKey: "dollarQuote",
    cell: ({ row }) => (
      <div className="flex flex-col text-sm">
        <span>{usdFormatter.format(row.original.dollarQuote)}</span>
        {row.original.dollarQuoteDate && (
          <span className="text-muted-foreground">
            {format(row.original.dollarQuoteDate, "dd/MM/yyyy", { locale: ptBR })}
          </span>
        )}
      </div>
    ),
  },
  {
    header: "Preço custo (USD)",
    accessorKey: "costPriceUsd",
    cell: ({ row }) => <div className="font-medium">{usdFormatter.format(row.original.costPriceUsd)}</div>,
  },
  {
    header: "Preço custo (BRL)",
    accessorKey: "costPriceBrl",
    cell: ({ row }) => (
      <div className="font-medium">{currencyFormatter.format(row.original.costPriceBrl)}</div>
    ),
  },
];

type Props = {
  sales: SaleTableRow[];
};

export function TableSales({ sales }: Props) {
  const { setRegister } = useRegisterEdit<SaleTableRow>();
  const data: SaleTableTableRow[] = sales.map((sale) => ({
    ...sale,
    productName: sale.product.name,
    productTid: sale.product.tid,
    productDescription: sale.product.description,
  }));

  return (
    <TableComponent
      registers={data}
      columns={columns}
      defaultSortingColumn="productName"
      keyToSearch="productName"
      modalName={MODAL_CREATE_SALE_TABLE}
      actionRemove={removeSaleTableAction}
      onChangeRegister={(register) => {
        if (!register) {
          setRegister(null);
          return;
        }
        const {
          productName: _productName,
          productTid: _productTid,
          productDescription: _productDescription,
          ...rest
        } = register;
        setRegister(rest);
      }}
    />
  );
}

