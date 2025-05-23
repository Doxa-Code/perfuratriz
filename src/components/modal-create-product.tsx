"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import * as React from "react";

import { createProductAction } from "@/actions/product-action";
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
import type { NCM } from "@/core/domain/entities/ncm";
import { useServerActionMutation } from "@/lib/hooks";
import { useModais } from "@/lib/hooks/use-modais";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_PRODUCT } from "@/lib/modais";
import { formatDecimal } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { RulerDimensionLine, Weight } from "lucide-react";
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
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
	name: z.string({ message: "Campo obrigatório" }),
	ncm: z.string({ message: "Campo obrigatório" }),
	weight: z.string({ message: "Campo obrigatório" }),
	length: z.string({ message: "Campo obrigatório" }),
	height: z.string({ message: "Campo obrigatório" }),
	width: z.string({ message: "Campo obrigatório" }),
	tid: z.string({ message: "Campo obrigatório" }),
	description: z.string({ message: "Campo obrigatório" }),
});

type Props = {
	ncms: NCM.Props[];
};

export function ModalCreateProduct(props: Props) {
	const [ncms] = React.useState(props.ncms);
	const { isOpen, toggleModal } = useModais();
	const { register, setRegister } = useRegisterEdit();
	const { mutate, isPending } = useServerActionMutation(createProductAction, {
		onSuccess() {
			toggleModal(MODAL_CREATE_PRODUCT);
			setRegister(null);
			form.reset();
		},
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	React.useEffect(() => {
		if (register && isOpen(MODAL_CREATE_PRODUCT)) {
			form.reset({
				name: register.name,
				ncm: register.ncm.id,
				weight: register.weight.toFixed(2).replace(".", ","),
				length: register.length.toFixed(2).replace(".", ","),
				height: register.height.toFixed(2).replace(".", ","),
				width: register.width.toFixed(2).replace(".", ","),
				tid: register.tid,
				description: register.description,
			});
		} else {
			form.reset({
				name: "",
				ncm: "",
				weight: "",
				length: "",
				height: "",
				width: "",
				tid: "",
				description: "",
			});
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
			open={isOpen(MODAL_CREATE_PRODUCT)}
			onOpenChange={(open) => toggleModal(MODAL_CREATE_PRODUCT, open)}
		>
			<DrawerContent>
				<div className="mx-auto w-full overflow-auto max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Novo Produto</DrawerTitle>
						<DrawerDescription>Preecha os campos abaixo</DrawerDescription>
					</DrawerHeader>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8 px-4"
						>
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
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome do produto</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Descrição</FormLabel>
										<FormControl>
											<Textarea {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="ncm"
								render={({ field }) => (
									<FormItem>
										<FormLabel>NCM</FormLabel>
										<Select
											disabled={!ncms.length}
											value={field.value}
											onValueChange={field.onChange}
										>
											<FormControl>
												<SelectTrigger className="w-full">
													<SelectValue
														placeholder={
															!ncms.length
																? "Cadastre um ncm para continuar"
																: "Selecione"
														}
													/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{ncms.map((ncm) => (
													<SelectItem value={String(ncm.id)} key={ncm.id}>
														{ncm.code}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="weight"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Peso (Kg)</FormLabel>
										<FormControl>
											<div className="flex overflow-hidden items-center shadow border-1 rounded-md">
												<Input
													className="shadow-none border-0 rounded-none"
													{...field}
													onChange={formatDecimal(field)}
												/>
												<div className="px-4 bg-zinc-200 h-full items-center justify-center flex">
													<Weight className="w-4 h-4 stroke-zinc-500" />
												</div>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="length"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Comprimento (mm)</FormLabel>
										<FormControl>
											<div className="flex overflow-hidden items-center shadow border-1 rounded-md">
												<Input
													className="shadow-none border-0 rounded-none"
													{...field}
													onChange={formatDecimal(field)}
												/>
												<div className="px-4 bg-zinc-200 h-full items-center justify-center flex">
													<RulerDimensionLine className="w-4 h-4 stroke-zinc-500" />
												</div>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="height"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Altura (mm)</FormLabel>
										<FormControl>
											<div className="flex overflow-hidden items-center shadow border-1 rounded-md">
												<Input
													className="shadow-none border-0 rounded-none"
													{...field}
													onChange={formatDecimal(field)}
												/>
												<div className="px-4 bg-zinc-200 h-full items-center justify-center flex">
													<RulerDimensionLine className="w-4 h-4 stroke-zinc-500" />
												</div>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="width"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Largura (mm)</FormLabel>
										<FormControl>
											<div className="flex overflow-hidden items-center shadow border-1 rounded-md">
												<Input
													className="shadow-none border-0 rounded-none"
													{...field}
													onChange={formatDecimal(field)}
												/>
												<div className="px-4 bg-zinc-200 h-full items-center justify-center flex">
													<RulerDimensionLine className="w-4 h-4 stroke-zinc-500" />
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
