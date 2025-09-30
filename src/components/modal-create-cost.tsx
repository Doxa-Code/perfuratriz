"use client";

import * as React from "react";

import { createCostAction } from "@/actions/cost-action";
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
import { MODAL_CREATE_COST } from "@/lib/modais";
import { formatDecimal } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
  description: z.string({ message: "Campo obrigatório" }),
  value: z.string({ message: "Campo obrigatório" }),
});

export function ModalCreateCost() {
  const { isOpen, toggleModal } = useModais();
  const { register, setRegister } = useRegisterEdit();
  const { mutate, isPending } = useServerActionMutation(createCostAction, {
    onSuccess() {
      toggleModal(MODAL_CREATE_COST);
      setRegister(null);
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  React.useEffect(() => {
    if (register && isOpen(MODAL_CREATE_COST)) {
      form.reset({
        description: register.description,
        value: register.value.toFixed(2).replace(".", ","),
      });
    } else {
      form.reset({
        description: "",
        value: "",
      });
    }
  }, [isOpen, register, form.reset]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      description: values.description,
      value: values.value,
      id: register?.id,
    });
  }

  return (
    <Drawer
      open={isOpen(MODAL_CREATE_COST)}
      onOpenChange={(open) => {
        toggleModal(MODAL_CREATE_COST, open);
        if (!open) {
          setRegister(null);
        }
      }}
    >
      <DrawerContent>
        <div className="mx-auto w-full overflow-auto max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Novo Custo administrativo</DrawerTitle>
            <DrawerDescription>Preecha os campos abaixo</DrawerDescription>
          </DrawerHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-4"
            >
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="value"
                render={({ field }) => (
                  <FormItem className="w-full max-w-[150px]">
                    <FormLabel>Valor</FormLabel>
                    <FormControl>
                      <Input {...field} onChange={formatDecimal(field, 2)} />
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
