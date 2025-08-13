"use client";
import { listNCMAction } from "@/app/actions/ncms";
import { NCM } from "@/core/entities/ncm";
import { useServerActionQuery } from "@/hooks/server-actions-hooks";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TitleIconCard from "../title-icon-card";
import Image from "next/image";
import { Button } from "flowbite-react";

const columnHelper = createColumnHelper<NCM>();

const columns = [
  columnHelper.accessor("code", {
    header: () => <span>Código NCM</span>,
    cell: (info) => (
      <p className="text-darklink dark:text-bodytext text-base">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("tax", {
    header: () => <span>Imposto de importação</span>,
    cell: (info) => (
      <p className="text-darklink dark:text-bodytext text-base">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("icms", {
    header: () => <span>ICMS</span>,
    cell: (info) => (
      <p className="text-darklink dark:text-bodytext text-base">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("pis", {
    header: () => <span>PIS</span>,
    cell: (info) => (
      <p className="text-darklink dark:text-bodytext text-base">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("cofins", {
    header: () => <span>COFINS</span>,
    cell: (info) => (
      <p className="text-darklink dark:text-bodytext text-base">
        {info.getValue()}
      </p>
    ),
  }),
  columnHelper.accessor("ipi", {
    header: () => <span>IPI</span>,
    cell: (info) => (
      <p className="text-darklink dark:text-bodytext text-base">
        {info.getValue()}
      </p>
    ),
  }),
];

const StripedTable = () => {
  const { data } = useServerActionQuery(listNCMAction, {
    input: undefined,
    queryKey: ["list-ncms"],
  });

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDownload = () => {
    // const headers = ["Name", "post", "status", "users"];
    // const rows = data.map((item) => [
    //   item.name,
    //   item.post,
    //   item.status,
    //   item.users.map((items) => items.id).join(", "),
    // ]);
    // const csvContent = [
    //   headers.join(","),
    //   ...rows.map((e) => e.join(",")),
    // ].join("\n");
    // const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.href = url;
    // link.setAttribute("download", "table-data.csv");
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <main title="NCMs" className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-semibold">NCMs</h5>
        <Button color={"primary"} className="rounded-md">
          Criar um NCM
        </Button>
      </div>
      <div className="overflow-x-auto border rounded-sm">
        <table className="min-w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-base text-ld font-semibold  text-left border-b border-ld px-4 py-3"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-border dark:divide-darkborder">
            <tr>
              <td colSpan={columns.length} className="text-center py-8 px-4">
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/svgs/no-data.webp"
                    alt="No data"
                    height={100}
                    width={100}
                    className="mb-4"
                  />
                  <h5>Não há registros</h5>
                </div>
              </td>
            </tr>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="odd:bg-transparent even:bg-lightgray dark:even:bg-lightprimary"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="whitespace-nowrap py-3 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default StripedTable;
