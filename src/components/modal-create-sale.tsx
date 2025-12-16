"use client";

import {
  createSaleTableAction,
  getSaleTableImportInfoAction,
} from "@/actions/sale-table-action";
import { getAverageDollarQuoteLastDIAction } from "@/actions/declaration-action";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  id: z.string().nullable(),
  productId: z
    .string({ required_error: "Produto obrigatório" })
    .min(1, "Produto obrigatório"),
  tid: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório"),
  description: z.string().optional(),
  lastImportationAt: z.string().nullable(),
  lastImportationQuote: z.string().nullable(),
  dollarQuote: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório"),
  typeDollarQuote: z.enum(["CURRENT", "LAST_DI", "FUTURE"], {
    required_error: "Selecione o tipo de cotação",
  }),
  dollarQuoteDate: z.string().nullable(),
  costPriceUsd: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Campo obrigatório"),
  costPriceBrl: z.string({ required_error: "Campo obrigatório" }),
});

type FormValues = z.infer<typeof formSchema>;

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
  typeDollarQuote: "CURRENT",
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
  const isSaleModalOpen = isOpen(MODAL_CREATE_SALE_TABLE);
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
  const {
    mutateAsync: fetchImportInfoMutation,
    isPending: isLoadingImportInfo,
  } = useServerActionMutation(getSaleTableImportInfoAction);

  const {
    mutateAsync: fetchAverageLastDIMutation,
    isPending: isFetchingLastDI,
  } = useServerActionMutation(getAverageDollarQuoteLastDIAction);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const productMapById = useMemo(() => {
    return new Map(products.map((product) => [product.id, product]));
  }, [products]);

  const productMapByTid = useMemo(() => {
    return new Map(
      products.map((product) => [product.tid.toLowerCase(), product])
    );
  }, [products]);

  const productId = form.watch("productId");
  const tidValue = form.watch("tid");
  const typeDollarQuote = form.watch("typeDollarQuote");

  const selectedProduct =
    (productId ? productMapById.get(productId) : undefined) ??
    register?.product;

  React.useEffect(() => {
    if (!isSaleModalOpen) {
      setProductPopoverOpen(false);
      return;
    }

    if (register) {
      // edição
      form.reset({
        id: register.id,
        productId: register.productId,
        tid: register.product.tid,
        description: register.product.description,
        lastImportationAt: register.lastImportationAt?.toISOString() ?? null,
        lastImportationQuote:
          register.lastImportationQuote?.toFixed(4).replace(".", ",") ?? null,
        dollarQuote: register.dollarQuote.toFixed(4).replace(".", ","),
        dollarQuoteDate:
          register.dollarQuoteDate?.toISOString() ?? new Date().toISOString(),
        typeDollarQuote: register.typeDollarQuote,
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
    } else {
      // criação nova tabela
      form.reset(defaultValues);
      setImportInfo(null);
      setProductPopoverOpen(false);
      void handleRefreshDollarQuote();
    }
  }, [register, isSaleModalOpen]);

  React.useEffect(() => {
    if (typeDollarQuote === "CURRENT" && !isFetchingQuote) {
      void handleRefreshDollarQuote();
    }
  }, [typeDollarQuote]);

  React.useEffect(() => {
    if (typeDollarQuote === "LAST_DI") {
      (async () => {
        try {
          const avgQuote = await fetchAverageLastDIMutation(undefined);
          if (avgQuote) {
            form.setValue(
              "dollarQuote",
              avgQuote.toFixed(4).replace(".", ","),
              {
                shouldValidate: true,
                shouldDirty: true,
              }
            );

            form.setValue("dollarQuoteDate", new Date().toISOString());
          }
        } catch (err) {
          console.error("Erro ao buscar média das DI:", err);
        }
      })();
    }
  }, [typeDollarQuote]);

  React.useEffect(() => {
    if (isSaleModalOpen && !register) {
      void handleRefreshDollarQuote();
    }
  }, [isSaleModalOpen, register]);

  React.useEffect(() => {
    if (register) return;
    if (!tidValue || !tidValue.trim()) return;
    const normalized = tidValue.trim().toLowerCase();
    const product = productMapByTid.get(normalized);
    if (product && product.id !== productId) {
      form.setValue("productId", product.id, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [tidValue, productMapByTid, productId, form, register]);

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
        form.setValue(
          "lastImportationQuote",
          result.quote.toFixed(4).replace(".", ",")
        );
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
            form.setValue("dollarQuote", quote.toFixed(4).replace(".", ","), {
              shouldValidate: true,
              shouldDirty: true,
            });
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

  React.useEffect(() => {
    const usdRaw = form.getValues("costPriceUsd");
    const quoteRaw = form.getValues("dollarQuote");

    // 👉 Se apagar o USD, limpa o BRL também
    if (!usdRaw || !usdRaw.trim()) {
      if (form.getValues("costPriceBrl")) {
        form.setValue("costPriceBrl", "", {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
      return;
    }

    const usd = parseFloat(usdRaw.replace(",", "."));
    const quote = parseFloat(quoteRaw?.replace(",", ".") ?? "");

    if (isNaN(usd) || isNaN(quote)) return;

    const brl = usd * quote;
    const formatted = brl.toFixed(2).replace(".", ",");

    if (form.getValues("costPriceBrl") !== formatted) {
      form.setValue("costPriceBrl", formatted, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [form.watch("costPriceUsd"), form.watch("dollarQuote")]);

  function onSubmit(values: FormValues) {
    mutate({
      id: values.id,
      productId: values.productId,
      lastImportationAt: values.lastImportationAt,
      lastImportationQuote: values.lastImportationQuote,
      dollarQuote: values.dollarQuote,
      dollarQuoteDate: values.dollarQuoteDate,
      typeDollarQuote: values.typeDollarQuote,
      costPriceUsd: values.costPriceUsd,
      costPriceBrl: values.costPriceBrl,
    });
  }

  const lastImportationDisplay = importInfo
    ? `${format(new Date(importInfo.createdAt), "dd/MM/yyyy", {
        locale: ptBR,
      })}${importInfo.quote ? ` • ${importInfo.quote.toFixed(4)}` : ""}`
    : "Nenhuma importação encontrada";

  return (
    <Drawer
      open={isSaleModalOpen}
      onOpenChange={(open) => toggleModal(MODAL_CREATE_SALE_TABLE, open)}
    >
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle>Tabela de Venda</DrawerTitle>
            <DrawerDescription>
              Cadastre uma nova tabela de venda
            </DrawerDescription>
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

              {/* Campos do formulário */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Produto */}
                <FormField
                  control={form.control}
                  name="productId"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Produto</FormLabel>
                      <Popover
                        open={productPopoverOpen}
                        onOpenChange={setProductPopoverOpen}
                      >
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
                                  {selectedProduct.name} • TID{" "}
                                  {selectedProduct.tid}
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
                              <CommandEmpty>
                                Nenhum produto encontrado
                              </CommandEmpty>
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
                                        {product.tid}
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
              </div>

              {/* Descritivo */}
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

              {/* Importação e Cotação */}
              <FormField
                control={form.control}
                name="lastImportationAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Última importação</FormLabel>
                    <input type="hidden" {...field} value={field.value ?? ""} />
                    <FormControl>
                      <Input value={lastImportationDisplay} disabled readOnly />
                    </FormControl>
                    {isLoadingImportInfo && (
                      <p className="text-xs text-muted-foreground">
                        Consultando declarações...
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="typeDollarQuote"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de cotação</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="CURRENT">Dólar atual</SelectItem>
                          <SelectItem value="LAST_DI">
                            Dólar última DI
                          </SelectItem>
                          <SelectItem value="FUTURE">Dólar futuro</SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
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
                          <Input
                            {...field}
                            disabled={
                              typeDollarQuote === "CURRENT" ||
                              typeDollarQuote === "LAST_DI"
                            }
                            className={
                              typeDollarQuote === "CURRENT"
                                ? "bg-muted/50 cursor-not-allowed"
                                : ""
                            }
                          />

                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            hidden={!(typeDollarQuote === "CURRENT")}
                            onClick={() => void handleRefreshDollarQuote()}
                            disabled={
                              isFetchingQuote || typeDollarQuote !== "CURRENT"
                            }
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

              {/* Preço de custo */}
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
                        <Input
                          {...field}
                          readOnly
                          disabled
                          className="bg-muted/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DrawerFooter className="px-0">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="cursor-pointer"
                >
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
