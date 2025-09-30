"use client";

import * as React from "react";

import { createICMSAction } from "@/actions/icms-action";
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
import { MODAL_CREATE_ICMS } from "@/lib/modais";
import { formatDecimal } from "@/lib/utils";
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
import SelectStates from "./select-states";
import { toast } from "sonner";

const formSchema = z.object({
  state: z.string({ message: "Campo obrigatório" }),
  icms: z.string({ message: "Campo obrigatório" }),
});

export function ModalCreateICMS() {
  const { isOpen, toggleModal } = useModais();
  const { register, setRegister } = useRegisterEdit();
  const { mutate, isPending } = useServerActionMutation(createICMSAction, {
    onSuccess() {
      toggleModal(MODAL_CREATE_ICMS);
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
    if (register && isOpen(MODAL_CREATE_ICMS)) {
      form.reset({
        state: register.state,
        icms: register.icms.toFixed(2).replace(".", ","),
      });
    } else {
      form.reset({
        state: "",
        icms: "",
      });
    }
  }, [isOpen, register, form.reset]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      icms: values.icms,
      state: values.state,
      id: register?.id,
    });
  }

  return (
    <Drawer
      open={isOpen(MODAL_CREATE_ICMS)}
      onOpenChange={(open) => {
        toggleModal(MODAL_CREATE_ICMS, open);
        if (!open) {
          setRegister(null);
        }
      }}
    >
      <DrawerContent>
        <div className="mx-auto w-full overflow-auto max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Novo ICMS por estado</DrawerTitle>
            <DrawerDescription>Preecha os campos abaixo</DrawerDescription>
          </DrawerHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-4"
            >
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <FormControl>
                      <SelectStates
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                      />
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
                          onChange={formatDecimal(field)}
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
