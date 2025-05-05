"use client";

import * as React from "react";

import { createNCMAction } from "@/actions/ncm-action";
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
import { useServerActionMutation } from "@/lib/hooks";
import { useModais } from "@/lib/hooks/use-modais";
import { useNCM } from "@/lib/hooks/use-ncm";
import { MODAL_CREATE_NCM } from "@/lib/modais";
import { zodResolver } from "@hookform/resolvers/zod";
import { Percent } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  code: z.string({ message: "Campo obrigatório" }),
  tax: z.string({ message: "Campo obrigatório" }),
  icms: z.string({ message: "Campo obrigatório" }),
  pis: z.string({ message: "Campo obrigatório" }),
  cofins: z.string({ message: "Campo obrigatório" }),
  ipi: z.string({ message: "Campo obrigatório" }),
});

export function ModalCreateNCM() {
  const { isOpen, toggleModal } = useModais();
  const { ncm, setNCM } = useNCM();
  const { mutate, isPending } = useServerActionMutation(createNCMAction, {
    onSuccess() {
      toggleModal(MODAL_CREATE_NCM);
      setNCM(null);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  React.useEffect(() => {
    if (ncm && isOpen(MODAL_CREATE_NCM)) {
      form.reset({
        code: ncm.code.toString(),
        cofins: ncm.cofins.toFixed(2),
        icms: ncm.icms.toFixed(2),
        ipi: ncm.ipi.toFixed(2),
        pis: ncm.pis.toFixed(2),
        tax: ncm.tax.toFixed(2),
      });
    } else {
      form.reset({
        code: "",
        cofins: "",
        icms: "",
        ipi: "",
        pis: "",
        tax: "",
      });
    }
  }, [isOpen, ncm, form.reset]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      ...values,
      id: ncm?.id ?? null,
    });
  }

  const formatPercent =
    (field: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.currentTarget;
      const raw = input.value.replace(/\D/g, "");

      const formatted = (Number(raw) / 100).toFixed(2).replace(".", ",");

      const positionFromEnd = input.value.length - (input.selectionStart ?? 0);

      input.value = formatted;
      field.onChange(e);

      setTimeout(() => {
        const newPosition = input.value.length - positionFromEnd;
        input.setSelectionRange(newPosition, newPosition);
      });
    };

  return (
    <Drawer
      open={isOpen(MODAL_CREATE_NCM)}
      onOpenChange={(open) => toggleModal(MODAL_CREATE_NCM, open)}
    >
      <DrawerContent>
        <div className="mx-auto w-full overflow-auto max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Novo NCM</DrawerTitle>
            <DrawerDescription>Preecha os campos abaixo</DrawerDescription>
          </DrawerHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-4"
            >
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Código NCM</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /\D/,
                            ""
                          );
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imposto da importação</FormLabel>
                    <FormControl>
                      <div className="flex overflow-hidden items-center shadow border-1 rounded-md">
                        <Input
                          className="shadow-none border-0 rounded-none"
                          {...field}
                          onChange={formatPercent(field)}
                        />
                        <div className="px-4 bg-zinc-200 h-full items-center justify-center flex">
                          <Percent className="w-4 h-4 stroke-zinc-500" />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="icms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ICMS</FormLabel>
                    <FormControl>
                      <div className="flex overflow-hidden items-center shadow border-1 rounded-md">
                        <Input
                          className="shadow-none border-0 rounded-none"
                          {...field}
                          onChange={formatPercent(field)}
                        />
                        <div className="px-4 bg-zinc-200 h-full items-center justify-center flex">
                          <Percent className="w-4 h-4 stroke-zinc-500" />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PIS</FormLabel>
                    <FormControl>
                      <div className="flex overflow-hidden items-center shadow border-1 rounded-md">
                        <Input
                          className="shadow-none border-0 rounded-none"
                          {...field}
                          onChange={formatPercent(field)}
                        />
                        <div className="px-4 bg-zinc-200 h-full items-center justify-center flex">
                          <Percent className="w-4 h-4 stroke-zinc-500" />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cofins"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>COFINS</FormLabel>
                    <FormControl>
                      <div className="flex overflow-hidden items-center shadow border-1 rounded-md">
                        <Input
                          className="shadow-none border-0 rounded-none"
                          {...field}
                          onChange={formatPercent(field)}
                        />
                        <div className="px-4 bg-zinc-200 h-full items-center justify-center flex">
                          <Percent className="w-4 h-4 stroke-zinc-500" />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ipi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IPI</FormLabel>
                    <FormControl>
                      <div className="flex overflow-hidden items-center shadow border-1 rounded-md">
                        <Input
                          className="shadow-none border-0 rounded-none"
                          {...field}
                          onChange={formatPercent(field)}
                        />
                        <div className="px-4 bg-zinc-200 h-full items-center justify-center flex">
                          <Percent className="w-4 h-4 stroke-zinc-500" />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DrawerFooter className="w-full px-0">
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
