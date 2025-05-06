"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";

import { createExpenseAction } from "@/actions/expense-action";
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
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_EXPENSE } from "@/lib/modais";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Switch } from "./ui/switch";

const formSchema = z.object({
  name: z.string({ message: "Campo obrigatório" }),
  useICMSBase: z.boolean({ message: "Campo obrigatório" }),
  useCustomsBase: z.boolean({ message: "Campo obrigatório" }),
  allocationMethod: z.enum(["NET_WEIGHT", "NET_VALUE", "PER_UNIT"], {
    message: "Campo obrigatório",
  }),
  currency: z.enum(["USD", "BRL"], { message: "Campo obrigatório" }),
});

export function ModalCreateExpense() {
  const { isOpen, toggleModal } = useModais();
  const { register, setRegister } = useRegisterEdit();
  const { mutate, isPending } = useServerActionMutation(createExpenseAction, {
    onSuccess() {
      toggleModal(MODAL_CREATE_EXPENSE);
      setRegister(null);
      form.reset();
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      useCustomsBase: false,
      useICMSBase: false,
    } as any,
  });

  React.useEffect(() => {
    if (register && isOpen(MODAL_CREATE_EXPENSE)) {
      form.reset({
        name: register.name,
        allocationMethod: register.allocationMethod,
        currency: register.currency,
        useCustomsBase: register.useCustomsBase,
        useICMSBase: register.useICMSBase,
      });
    } else {
      form.reset();
    }
  }, [isOpen, register, form.reset]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      ...values,
      id: register?.id ?? null,
    });
  }

  return (
    <Drawer
      open={isOpen(MODAL_CREATE_EXPENSE)}
      onOpenChange={(open) => toggleModal(MODAL_CREATE_EXPENSE, open)}
    >
      <DrawerContent>
        <div className="mx-auto w-full overflow-auto max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Novo Despesa</DrawerTitle>
            <DrawerDescription>Preecha os campos abaixo</DrawerDescription>
          </DrawerHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da despesa</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="useCustomsBase"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Base de cálculo para Valor Aduaneiro</FormLabel>

                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="max-w-44"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useICMSBase"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Base cálculo ICMS</FormLabel>

                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="max-w-44"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="allocationMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Forma de rateio</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="NET_WEIGHT">Peso Líquido</SelectItem>
                        <SelectItem value="NET_VALUE">Valor Líquido</SelectItem>
                        <SelectItem value="PER_UNIT">Por peça</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Moeda</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USD">
                          Dolár Americano (USD)
                        </SelectItem>
                        <SelectItem value="BRL">
                          Real Brasileiro (R$)
                        </SelectItem>
                      </SelectContent>
                    </Select>
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
