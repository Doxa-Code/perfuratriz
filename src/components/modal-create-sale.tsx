"use client";

import {
  createSaleTableAction,
  getSaleTableImportInfoAction,
} from "@/actions/sale-table-action";
import type { Product } from "@/core/domain/entities/product";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useServerActionMutation } from "@/lib/hooks";
import { useModais } from "@/lib/hooks/use-modais";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_SALE_TABLE } from "@/lib/modais";
import { cn } from "@/lib/utils";
import { format, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Loader2, RefreshCw, Search } from "lucide-react";
import * as React from "react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { saleTableSchema } from "@/actions/sale-table-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  id: z.string().nullable(),
  productId: z.string({ required_error: "Produto obrigatório" }).min(1, "Produto obrigatório"),
  tid: z.string({ required_error: "Campo obrigatório" }).min(1, "Campo obrigatório"),
  description: z.string().optional(),
  lastImportationAt: z.string().nullable(),
  lastImportationQuote: z.string().nullable(),
  dollarQuote: z.string({ required_error: "Campo obrigatório" }).min(1, "Campo obrigatório"),
  dollarQuoteDate: z.string().nullable(),
  costPriceUsd: z.string({ required_error: "Campo obrigatório" }).min(1, "Campo obrigatório"),
  costPriceBrl: z.string({ required_error: "Campo obrigatório" }).min(1, "Campo obrigatório"),
});

type FormValues = z.infer<typeof formSchema>;
type SaleTableRow = z.infer<typeof saleTableSchema>;

type Props = {
  products: Product[];
};

const defaultValues: FormValues = {
  id: null,
  productId: "",
  tid: "",
  description: "",
  lastImportationAt: null,
  lastImportationQuote: null,
  dollarQuote: "",
  dollarQuoteDate: null,
  costPriceUsd: "",
  costPriceBrl: "",
};

type ImportInfo = {
  createdAt: string;
  quote: number;
};

async function fetchDollarQuoteForDate(date: Date) {
  const formattedDate = format(date, "MM-dd-yyyy");
  const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${formattedDate}'&$top=1&$format=json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao consultar cotação do dólar");
  }
  const data = await response.json();
  const value = data?.value?.[0];
  if (!value) return null;
  const quote = value.cotacaoVenda ?? value.cotacaoCompra;
  if (!quote) return null;
  return Number(quote);
}

export function ModalCreateSale({ products }: Props) {
  const { isOpen, toggleModal } = useModais();
  const { register, setRegister } = useRegisterEdit();
  const [importInfo, setImportInfo] = React.useState<ImportInfo | null>(null);
  const [isFetchingQuote, setIsFetchingQuote] = React.useState(false);
  const [productPopoverOpen, setProductPopoverOpen] = React.useState(false);
  const { mutate, isPending } = useServerActionMutation(createSaleTableAction, {
    onSuccess() {
      toggleModal(MODAL_CREATE_SALE_TABLE);
      setRegister(null);
      setImportInfo(null);
      form.reset(defaultValues);
    },
  });
  const { mutateAsync: fetchImportInfoMutation, isPending: isLoadingImportInfo } =
    useServerActionMutation(getSaleTableImportInfoAction);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const productMapById = useMemo(() => {
    return new Map(products.map((product) => [product.id, product]));
  }, [products]);

  const productMapByTid = useMemo(() => {
    return new Map(products.map((product) => [product.tid.toLowerCase(), product]));
  }, [products]);

  const productId = form.watch("productId");
  const tidValue = form.watch("tid");

  const selectedProduct = productId ? productMapById.get(productId) : undefined;

  React.useEffect(() => {
    if (register && isOpen(MODAL_CREATE_SALE_TABLE)) {
      form.reset({
        id: register.id,
        productId: register.productId,
        tid: register.product.tid,
        description: register.product.description,
        lastImportationAt: register.lastImportationAt
          ? register.lastImportationAt.toISOString()
          : null,
        lastImportationQuote: register.lastImportationQuote
          ? register.lastImportationQuote.toFixed(4).replace(".", ",")
          : null,
        dollarQuote: register.dollarQuote.toFixed(4).replace(".", ","),
        dollarQuoteDate: register.dollarQuoteDate
          ? register.dollarQuoteDate.toISOString()
          : new Date().toISOString(),
        costPriceUsd: register.costPriceUsd.toFixed(2).replace(".", ","),
        costPriceBrl: register.costPriceBrl.toFixed(2).replace(".", ","),
      });
      setImportInfo(
        register.lastImportationAt && register.lastImportationQuote
          ? {
              createdAt: register.lastImportationAt.toISOString(),
              quote: register.lastImportationQuote,
            }
          : null
      );
      return;
    }

    if (!isOpen(MODAL_CREATE_SALE_TABLE)) {
      return;
    }

    form.reset(defaultValues);
    setImportInfo(null);
    void handleRefreshDollarQuote();
  }, [register, isOpen, form]);

  React.useEffect(() => {
    if (!tidValue || !tidValue.trim()) return;
    const normalized = tidValue.trim().toLowerCase();
    const product = productMapByTid.get(normalized);
    if (product && product.id !== productId) {
      form.setValue("productId", product.id, { shouldValidate: true, shouldDirty: true });
    }
  }, [tidValue, productMapByTid, productId, form]);

  React.useEffect(() => {
    if (!productId) {
      form.setValue("description", "");
      setImportInfo(null);
      form.setValue("lastImportationAt", null);
      form.setValue("lastImportationQuote", null);
      return;
    }

    const product = productMapById.get(productId);
    if (product) {
      form.setValue("tid", product.tid);
      form.setValue("description", product.description);
    }

    void (async () => {
      try {
        const result = await fetchImportInfoMutation({ productId });
        if (!result) {
          setImportInfo(null);
          form.setValue("lastImportationAt", null);
          form.setValue("lastImportationQuote", null);
          return;
        }
        setImportInfo(result);
        form.setValue("lastImportationAt", result.createdAt);
        form.setValue("lastImportationQuote", result.quote.toFixed(4).replace(".", ","));
      } catch (error) {
        console.error(error);
        setImportInfo(null);
        form.setValue("lastImportationAt", null);
        form.setValue("lastImportationQuote", null);
      }
    })();
  }, [productId, productMapById, form, fetchImportInfoMutation]);

  async function handleRefreshDollarQuote() {
    setIsFetchingQuote(true);
    try {
      let currentDate = new Date();
      for (let attempt = 0; attempt < 6; attempt++) {
        try {
          const quote = await fetchDollarQuoteForDate(currentDate);
          if (quote) {
            form.setValue("dollarQuote", quote.toFixed(4).replace(".", ","));
            form.setValue("dollarQuoteDate", currentDate.toISOString());
            return;
          }
        } catch (error) {
          if (attempt === 5) {
            throw error;
          }
        }
        currentDate = subDays(currentDate, 1);
      }
      throw new Error("Não foi possível recuperar a cotação do dólar.");
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingQuote(false);
    }
  }

  function onSubmit(values: FormValues) {
    mutate({
      id: values.id,
      productId: values.productId,
      lastImportationAt: values.lastImportationAt,
      lastImportationQuote: values.lastImportationQuote,
      dollarQuote: values.dollarQuote,
      dollarQuoteDate: values.dollarQuoteDate,
      costPriceUsd: values.costPriceUsd,
      costPriceBrl: values.costPriceBrl,
    });
  }

  const lastImportationDisplay = importInfo
    ? `${format(new Date(importInfo.createdAt), "dd/MM/yyyy", { locale: ptBR })}${
        importInfo.quote ? ` • ${importInfo.quote.toFixed(4)}` : ""
      }`
    : "Nenhuma importação encontrada";

  return (
    <Drawer
      open={isOpen(MODAL_CREATE_SALE_TABLE)}
      onOpenChange={(open) => toggleModal(MODAL_CREATE_SALE_TABLE, open)}
    >
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle>Tabela de Venda</DrawerTitle>
            <DrawerDescription>Cadastre uma nova tabela de venda</DrawerDescription>
          </DrawerHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 px-4 pb-6"
              autoComplete="off"
            >
              <input type="hidden" {...form.register("id")} />
              <input type="hidden" {...form.register("lastImportationQuote")} />
              <input type="hidden" {...form.register("dollarQuoteDate")} />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="productId"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Produto</FormLabel>
                      <Popover open={productPopoverOpen} onOpenChange={setProductPopoverOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              type="button"
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                              onClick={() => setProductPopoverOpen(true)}
                            >
                              {selectedProduct ? (
                                <span className="truncate text-left">
                                  {selectedProduct.name} • TID {selectedProduct.tid}
                                </span>
                              ) : (
                                "Selecione um produto"
                              )}
                              <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                          <Command>
                            <CommandInput placeholder="Pesquise pelo nome ou TID" />
                            <CommandList>
                              <CommandEmpty>Nenhum produto encontrado</CommandEmpty>
                              <CommandGroup>
                                {products.map((product) => (
                                  <CommandItem
                                    key={product.id}
                                    value={`${product.name} ${product.tid}`}
                                    onSelect={() => {
                                      form.setValue("productId", product.id, {
                                        shouldDirty: true,
                                        shouldValidate: true,
                                      });
                                      setProductPopoverOpen(false);
                                    }}
                                  >
                                    <div className="flex flex-col">
                                      <span>{product.name}</span>
                                      <span className="text-xs text-muted-foreground">
                                        TID {product.tid}
                                      </span>
                                    </div>
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tid"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>TID</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descritivo</FormLabel>
                    <FormControl>
                      <Textarea {...field} disabled />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="lastImportationAt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Última importação</FormLabel>
                      <FormControl>
                      </FormControl>
                      <input
                        type="hidden"
                        {...field}
                        value={field.value ?? ""}
                      />
                      {isLoadingImportInfo && (
                        <p className="text-xs text-muted-foreground">Consultando declarações...</p>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dollarQuote"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cotação do dólar</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Input {...field} />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => void handleRefreshDollarQuote()}
                            disabled={isFetchingQuote}
                          >
                            {isFetchingQuote ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <RefreshCw className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="costPriceUsd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preço custo (USD)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="costPriceBrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preço custo (BRL)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DrawerFooter className="px-0">
                <Button type="submit" disabled={isPending} className="cursor-pointer">
                  {isPending ? "Salvando..." : "Salvar"}
                </Button>
                <DrawerClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}