"use client";

import { createInvoiceAction } from "@/actions/invoice-action";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Invoice } from "@/core/domain/entities/invoice";
import { Product } from "@/core/domain/entities/product";
import { InvoiceProduct } from "@/core/domain/value-objects/invoice-product";
import { useServerActionMutation } from "@/lib/hooks";
import { useModais } from "@/lib/hooks/use-modais";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_INVOICE } from "@/lib/modais";
import { cn, formatDecimal } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { pt } from "date-fns/locale/pt";
import {
  CalendarIcon,
  DollarSign,
  Minus,
  Plus,
  TriangleRightIcon,
  Weight,
} from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calendar } from "./ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  registration: z.string({ message: "Campo obrigatório" }),
  quote: z.string({ message: "Campo obrigatório" }),
  createdAt: z.date().optional(),
  products: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number(),
      amount: z.number(),
    })
  ),
});

type Props = {
  products: Product.Props[];
};

export function ModalCreateInvoice(props: Props) {
  const [invoiceProductToAdd, setInvoiceProductToAdd] =
    React.useState<InvoiceProduct | null>();
  const [products] = React.useState(props.products ?? []);
  const [invoice, setInvoice] = React.useState<Invoice | null>(null);
  const { isOpen, toggleModal } = useModais();
  const { register, setRegister } = useRegisterEdit();
  const { mutate, isPending } = useServerActionMutation(createInvoiceAction, {
    onSuccess() {
      toggleModal(MODAL_CREATE_INVOICE);
      setRegister(null);
      form.reset();
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    form.watch((values) => {
      const invoiceCreated = Invoice.create({
        quote: Number(values.quote?.replace(",", ".") ?? "0"),
        registration: values.registration ?? "",
        createdAt: values.createdAt ?? new Date(),
      });
      values.products?.map((p) => {
        const product = products.find((prod) => prod.id === p?.productId);
        if (!product) return;
        invoiceCreated.add(
          InvoiceProduct.create({
            amount: p?.amount ?? 0,
            product: Product.instance(product),
            quantity: p?.quantity ?? 0,
          })
        );
      });
      setInvoice(invoiceCreated);
    });
  }, []);

  React.useEffect(() => {
    if (register && isOpen(MODAL_CREATE_INVOICE)) {
      form.reset({
        createdAt: register.createdAt,
        products: register.products.map(
          (p: {
            product: { id: string };
            quantity: number;
            amount: number;
          }) => ({
            productId: p.product.id,
            quantity: p.quantity,
            amount: p.amount,
          })
        ),
        quote: register.quote.toFixed(4).replace(".", ","),
        registration: register.registration,
      });
    } else {
      form.reset({
        products: [],
        createdAt: new Date(),
        quote: "",
        registration: "",
      });
    }
  }, [isOpen, register, form.reset]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      ...values,
      quote: Number(values.quote?.replace(",", ".") ?? "0"),
      id: register?.id ?? null,
    });
  }

  return (
    <Drawer
      open={isOpen(MODAL_CREATE_INVOICE)}
      onOpenChange={(open) => toggleModal(MODAL_CREATE_INVOICE, open)}
    >
      <DrawerContent className="h-screen !max-h-[90vh]">
        <div className="mx-auto w-full overflow-auto container">
          <DrawerHeader>
            <DrawerTitle>Nova invoice</DrawerTitle>
            <DrawerDescription>Preecha os campos abaixo</DrawerDescription>
          </DrawerHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-4"
            >
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="registration"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Número da invoice</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="createdAt"
                  render={({ field }) => (
                    <FormItem className="w-full max-w-[150px]">
                      <FormLabel>Data invoice</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd/MM/yyyy", {
                                    locale: pt,
                                  })
                                ) : (
                                  <span>DD/MM/YYYY</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quote"
                  render={({ field }) => (
                    <FormItem className="w-full max-w-[150px]">
                      <FormLabel>Cotação invoice</FormLabel>
                      <FormControl>
                        <Input {...field} onChange={formatDecimal(field, 4)} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="products"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <table>
                        <thead>
                          <tr>
                            <td />
                            <th className="border p-2 bg-primary text-white text-xs text-left">
                              Total Peças
                            </th>
                            <td />
                            <th className="border p-2 bg-primary text-white text-xs text-left">
                              Total invoice
                            </th>
                            <th className="border p-2 bg-primary text-white text-xs text-left">
                              Peso Líquido
                            </th>
                            <th className="border p-2 bg-primary text-white text-xs text-left">
                              Volume Líquido
                            </th>
                          </tr>
                          <tr>
                            <td />
                            <td className="border p-2 text-xs">
                              {invoice?.quantity}
                            </td>
                            <td />
                            <td className="border text-xs">
                              <div className="flex gap-2">
                                <div className="px-4 border-r text-center flex justify-center items-center bg-muted text-muted-foreground">
                                  <DollarSign size={15} />
                                </div>
                                {Intl.NumberFormat("pt-BR", {
                                  minimumFractionDigits: 4,
                                  maximumFractionDigits: 4,
                                }).format(invoice?.amount ?? 0)}
                              </div>
                            </td>
                            <td className="border p-2 text-xs">
                              {(invoice?.weight ?? 0)
                                .toFixed(2)
                                .replace(".", ",")}
                            </td>
                            <td className="border p-2 text-xs">
                              {(invoice?.volume ?? 0)
                                .toFixed(2)
                                .replace(".", ",")}
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2" />
                            <td className="p-2" />
                            <td className="p-2" />
                            <td className="p-2" />
                            <td className="p-2" />
                            <td className="p-2" />
                          </tr>
                          <tr>
                            <th className="text-left text-xs p-2 bg-muted border">
                              Produtos
                            </th>
                            <th className="text-left text-xs p-2 bg-muted w-[150px] border">
                              Qtd.
                            </th>
                            <th className="text-left text-xs p-2 bg-muted w-[200px] border">
                              Valor Unit.
                            </th>
                            <th className="text-left text-xs p-2 bg-muted w-[200px] border">
                              Valor Total
                            </th>
                            <th className="text-left text-xs p-2 bg-muted w-[200px] border">
                              Peso Líquido
                            </th>
                            <th className="text-left text-xs p-2 bg-muted w-[200px] border">
                              Volume Líquido
                            </th>
                            <th className="p-2 w-[50px]" />
                          </tr>
                        </thead>
                        <tbody>
                          {field.value?.map((p) => {
                            const product = products.find(
                              (product) => product.id === p?.productId
                            );
                            if (!product) return <></>;
                            const invoiceProduct = InvoiceProduct.create({
                              amount: p.amount,
                              product: Product.instance(product),
                              quantity: p.quantity,
                            });
                            return (
                              <tr key={p.productId}>
                                <td className="p-2 border text-xs">
                                  {invoiceProduct.product.name}
                                </td>
                                <td className="p-2 border text-xs">
                                  {invoiceProduct.quantity}
                                </td>
                                <td className="p-2 border text-xs">
                                  {Intl.NumberFormat("pt-BR", {
                                    minimumFractionDigits: 4,
                                    maximumFractionDigits: 4,
                                  }).format(invoiceProduct?.amount ?? 0)}
                                </td>
                                <td className="p-2 border text-xs">
                                  {Intl.NumberFormat("pt-BR", {
                                    minimumFractionDigits: 4,
                                    maximumFractionDigits: 4,
                                  }).format(invoiceProduct?.total ?? 0)}
                                </td>
                                <td className="p-2 border text-xs">
                                  {(invoiceProduct?.weight ?? 0)
                                    .toFixed(2)
                                    .replace(".", ",")}
                                </td>
                                <td className="p-2 border text-xs">
                                  {(invoiceProduct?.volume ?? 0)
                                    .toFixed(2)
                                    .replace(".", ",")}
                                </td>
                                <td className="px-2">
                                  <Button
                                    type="button"
                                    size="sm"
                                    className="bg-red-600 w-7 h-7 rounded-full hover:bg-red-500"
                                    onClick={() => {
                                      field.onChange(
                                        field.value.filter(
                                          (ip) => ip.productId !== p.productId
                                        )
                                      );
                                    }}
                                  >
                                    <Minus />
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                          <tr>
                            <td className="border">
                              <Select
                                onValueChange={(value) => {
                                  const product = products.find(
                                    (p) => p.id === value
                                  );

                                  if (!product) {
                                    setInvoiceProductToAdd(null);
                                    return;
                                  }

                                  setInvoiceProductToAdd(
                                    InvoiceProduct.create({
                                      amount: 0,
                                      product: Product.instance(product),
                                      quantity: 0,
                                    })
                                  );
                                }}
                                value={invoiceProductToAdd?.product.id ?? ""}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full border-0 rounded-none shadow-none">
                                    <SelectValue placeholder="Selecione" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {products.map((product) => (
                                    <SelectItem
                                      value={String(product.id)}
                                      key={product.id}
                                    >
                                      {product.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </td>
                            <td className="border">
                              <Input
                                value={invoiceProductToAdd?.quantity ?? 0}
                                onChange={(e) => {
                                  e.currentTarget.value =
                                    e.currentTarget.value.replace(/\D/gim, "");
                                  if (invoiceProductToAdd) {
                                    setInvoiceProductToAdd(
                                      InvoiceProduct.create({
                                        quantity: Number(
                                          e.currentTarget.value.replace(
                                            ",",
                                            "."
                                          )
                                        ),
                                        amount: invoiceProductToAdd.amount,
                                        product: invoiceProductToAdd.product,
                                      })
                                    );
                                  }
                                }}
                                className="w-full border-0 rounded-none focus-visible:ring-0"
                              />
                            </td>
                            <td className="border">
                              <div className="flex w-full justify-start  rounded-none overflow-hidden">
                                <div className="px-4 border-r text-center flex justify-center items-center bg-muted text-muted-foreground">
                                  <DollarSign size={15} />
                                </div>
                                <Input
                                  className="w-full focus-visible:ring-0 shadow-none border-0 rounded-none max-w-[150px]"
                                  value={Intl.NumberFormat("pt-BR", {
                                    minimumFractionDigits: 4,
                                    maximumFractionDigits: 4,
                                  }).format(invoiceProductToAdd?.amount ?? 0)}
                                  onChange={formatDecimal(
                                    {
                                      onChange(e) {
                                        if (invoiceProductToAdd) {
                                          setInvoiceProductToAdd(
                                            InvoiceProduct.create({
                                              quantity:
                                                invoiceProductToAdd.quantity,
                                              amount: Number(
                                                e.currentTarget.value.replace(
                                                  ",",
                                                  "."
                                                )
                                              ),
                                              product:
                                                invoiceProductToAdd.product,
                                            })
                                          );
                                        }
                                      },
                                    },
                                    4
                                  )}
                                />
                              </div>
                            </td>
                            <td className="border">
                              <div className="flex w-full justify-start border-0 rounded-none overflow-hidden">
                                <div className="px-4 border-r text-center flex justify-center items-center bg-muted text-muted-foreground">
                                  <DollarSign size={15} />
                                </div>
                                <Input
                                  className="w-full bg-muted focus-visible:ring-0 shadow-none border-0 rounded-none"
                                  value={Intl.NumberFormat("pt-BR", {
                                    minimumFractionDigits: 4,
                                    maximumFractionDigits: 4,
                                  }).format(invoiceProductToAdd?.total ?? 0)}
                                  disabled
                                />
                              </div>
                            </td>
                            <td className="border">
                              <div className="flex justify-start border-0 rounded-none overflow-hidden">
                                <div className="px-4 border-r text-center flex justify-center items-center bg-muted text-muted-foreground">
                                  <Weight size={15} />
                                </div>
                                <Input
                                  className="w-full bg-muted focus-visible:ring-0 shadow-none border-0 rounded-none"
                                  value={(invoiceProductToAdd?.weight ?? 0)
                                    .toFixed(2)
                                    .replace(".", ",")}
                                  disabled
                                />
                              </div>
                            </td>

                            <td className="border">
                              <div className="flex justify-start shadow border-0 rounded-none overflow-hidden">
                                <div className="px-4 border-r text-center flex justify-center items-center bg-muted text-muted-foreground">
                                  <TriangleRightIcon size={15} />
                                </div>
                                <Input
                                  className="bg-muted focus-visible:ring-0 shadow-none border-0 rounded-none"
                                  value={(invoiceProductToAdd?.volume ?? 0)
                                    .toFixed(2)
                                    .replace(".", ",")}
                                  disabled
                                />
                              </div>
                            </td>
                            <td className="px-2">
                              <Button
                                disabled={!invoiceProductToAdd}
                                onClick={() => {
                                  if (!invoiceProductToAdd) return;
                                  field.onChange([
                                    ...(field.value ?? []).filter(
                                      (p) =>
                                        p.productId !==
                                        invoiceProductToAdd.product.id
                                    ),
                                    {
                                      productId:
                                        invoiceProductToAdd?.product.id,
                                      quantity: invoiceProductToAdd?.quantity,
                                      amount: invoiceProductToAdd?.amount,
                                    },
                                  ]);
                                  setInvoiceProductToAdd(null);
                                }}
                                type="button"
                                className="group w-7 h-7 rounded-full disabled:bg-muted disabled:border-muted-foreground"
                              >
                                <Plus className="group-disabled:stroke-muted-foreground" />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DrawerFooter className="w-full flex-row justify-end bottom-0 z-[9999] px-0">
                <Button
                  disabled={isPending}
                  className="cursor-pointer"
                  type="submit"
                >
                  {isPending ? "Cadastrando..." : "Cadastrar"}
                </Button>
                <DrawerClose asChild>
                  <Button
                    type="button"
                    className="cursor-pointer"
                    variant="outline"
                  >
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
