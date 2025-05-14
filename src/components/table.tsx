"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useServerActionMutation } from "@/lib/hooks";
import { useModais } from "@/lib/hooks/use-modais";
import { usePagination } from "@/lib/hooks/use-pagination";
import { cn } from "@/lib/utils";
import {
  type ColumnDef,
  type PaginationState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Edit,
  Trash,
} from "lucide-react";
import { useMemo, useState } from "react";

type Props<T> = {
  columns: ColumnDef<T>[];
  actionRemove: any;
  onChangeRegister(items: T | null): void;
  defaultSortingColumn: keyof T;
  registers: T[];
  keyToSearch: keyof T;
  modalName: string;
  onError?: (error: string) => void;
};

export function TableComponent<T extends { id: string }>(props: Props<T>) {
  const pageSize = 12;
  const [rowSelection, setRowSelection] = useState({});
  const { toggleModal } = useModais();
  const { mutate } = useServerActionMutation(props.actionRemove, {
    onSuccess() {
      table.resetRowSelection();
    },
    onError(error) {
      props.onError?.(error);
    },
  });
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });
  const [sorting, setSorting] = useState<SortingState>(
    props.defaultSortingColumn
      ? [
          {
            id: props.defaultSortingColumn as any,
            desc: false,
          },
        ]
      : []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const filteredRegistered = useMemo(() => {
    return props.registers?.filter((register) =>
      register[props.keyToSearch]
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [props.registers, props.keyToSearch, searchTerm]);

  const table = useReactTable({
    data: filteredRegistered,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    enableSortingRemoval: false,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      pagination,
      rowSelection,
    },
  });

  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage: table.getState().pagination.pageIndex + 1,
    totalPages: table.getPageCount(),
    paginationItemsToDisplay: 5,
  });

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-start gap-4 border-b py-4 md:py-2">
        <Input
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-96"
        />

        <Button
          data-hidden={
            !table.getSelectedRowModel().rows.length ||
            table.getSelectedRowModel().rows.length > 1
          }
          className="data-[hidden=true]:hidden cursor-pointer hover:bg-black-500"
          onClick={() => {
            props.onChangeRegister(
              table.getSelectedRowModel().rows.at(0)?.original ?? null
            );
            toggleModal(props.modalName);
          }}
        >
          <Edit />
          Editar
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              data-hidden={!table.getSelectedRowModel().rows.length}
              variant="destructive"
              className="data-[hidden=true]:hidden cursor-pointer hover:bg-red-500"
            >
              <Trash />
              Excluir
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Essa ação não pode ser desfeita. Isso excluirá permanentemente
                sua conta e removerá seus dados dos nossos servidores.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  mutate({
                    ids: table
                      .getSelectedRowModel()
                      .rows.map((r) => r.original.id),
                  });
                }}
                className="bg-red-600 hover:bg-red-500"
              >
                Continuar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="space-y-4">
        <div className="overflow-hidden rounded-lg h-screen max-h-[600px] border border-border bg-background">
          <Table className="table-fixed">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-transparent">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        style={{ width: `${header.getSize()}px` }}
                        className="h-11"
                      >
                        {header.isPlaceholder ? null : header.column.getCanSort() ? (
                          <div
                            className={cn(
                              header.column.getCanSort() &&
                                "flex h-full cursor-pointer select-none items-center justify-between gap-2"
                            )}
                            onClick={header.column.getToggleSortingHandler()}
                            onKeyDown={(e) => {
                              if (
                                header.column.getCanSort() &&
                                (e.key === "Enter" || e.key === " ")
                              ) {
                                e.preventDefault();
                                header.column.getToggleSortingHandler()?.(e);
                              }
                            }}
                            tabIndex={
                              header.column.getCanSort() ? 0 : undefined
                            }
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: (
                                <ChevronUp
                                  className="shrink-0 opacity-60"
                                  size={16}
                                  strokeWidth={2}
                                  aria-hidden="true"
                                />
                              ),
                              desc: (
                                <ChevronDown
                                  className="shrink-0 opacity-60"
                                  size={16}
                                  strokeWidth={2}
                                  aria-hidden="true"
                                />
                              ),
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        ) : (
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    onClick={() => row.toggleSelected()}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={props.columns.length}
                    className="h-24 text-center"
                  >
                    Nenhum resultado
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between gap-3 max-sm:flex-col">
          {/* Page number information */}
          <p
            className="flex-1 whitespace-nowrap text-sm text-muted-foreground"
            aria-live="polite"
          >
            Pagina{" "}
            <span className="text-foreground">
              {table.getState().pagination.pageIndex + 1}
            </span>{" "}
            de <span className="text-foreground">{table.getPageCount()}</span>
          </p>

          {/* Pagination buttons */}
          <div className="grow">
            <Pagination>
              <PaginationContent>
                {/* Previous page button */}
                <PaginationItem>
                  <Button
                    size="icon"
                    variant="outline"
                    className="disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    aria-label="Go to previous page"
                  >
                    <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
                  </Button>
                </PaginationItem>

                {/* Left ellipsis (...) */}
                {showLeftEllipsis && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                {/* Page number buttons */}
                {pages.map((page) => {
                  const isActive =
                    page === table.getState().pagination.pageIndex + 1;
                  return (
                    <PaginationItem key={page}>
                      <Button
                        size="icon"
                        variant={`${isActive ? "outline" : "ghost"}`}
                        onClick={() => table.setPageIndex(page - 1)}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {page}
                      </Button>
                    </PaginationItem>
                  );
                })}

                {/* Right ellipsis (...) */}
                {showRightEllipsis && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                {/* Next page button */}
                <PaginationItem>
                  <Button
                    size="icon"
                    variant="outline"
                    className="disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    aria-label="Go to next page"
                  >
                    <ChevronRight
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <div className="flex flex-1 justify-end text-end">
            <p className="flex-1 whitespace-nowrap text-sm text-muted-foreground">
              <span className="text-foreground">{props.registers.length}</span>{" "}
              registros
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
