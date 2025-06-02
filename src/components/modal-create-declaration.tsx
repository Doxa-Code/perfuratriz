"use client";

import { createDeclarationAction } from "@/actions/declaration-action";
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
import { Declaration } from "@/core/domain/entities/declaration";
import { Expense } from "@/core/domain/entities/expense";
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration";
import { Invoice } from "@/core/domain/entities/invoice";
import { useServerActionMutation } from "@/lib/hooks";
import { useModais } from "@/lib/hooks/use-modais";
import { useRegisterEdit } from "@/lib/hooks/use-register-edit";
import { MODAL_CREATE_DECLARATION } from "@/lib/modais";
import { cn, formatDecimal } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { pt } from "date-fns/locale/pt";
import { CalendarIcon, Trash } from "lucide-react";
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
	createdAt: z.date().optional(),
	quote: z.string({ message: "Campo obrigatório" }),
	invoiceId: z.string({ message: "Campo obrigatório" }),
	expenses: z.array(
		z.object({
			name: z.string(),
			useICMSBase: z.boolean(),
			useCustomsBase: z.boolean(),
			allocationMethod: z.enum(["NET_WEIGHT", "NET_VALUE", "PER_UNIT"]),
			currency: z.enum(["USD", "BRL"]),
			amount: z.number(),
		}),
	),
});

type Props = {
	invoices: {
		id: string;
		registration: string;
		createdAt: Date;
	}[];
	expenses: Expense.Props[];
};

export function ModalCreateDeclaration(props: Props) {
	const [invoices] = React.useState(props.invoices ?? []);
	const [expenses] = React.useState(props.expenses ?? []);
	const [declaration, setDeclaration] = React.useState<Declaration>();
	const { isOpen, toggleModal } = useModais();
	const { register, setRegister } = useRegisterEdit();
	const { mutate, isPending } = useServerActionMutation(
		createDeclarationAction,
		{
			onSuccess() {
				toggleModal(MODAL_CREATE_DECLARATION);
				setRegister(null);
				setDeclaration(undefined);
				form.reset();
			},
			onError(error) {
				console.log(error);
			},
		},
	);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		if (!isOpen(MODAL_CREATE_DECLARATION)) {
			form.reset({
				createdAt: new Date(),
				quote: "",
				registration: "",
				expenses: [],
				invoiceId: "",
			});
		}
	}, [isOpen(MODAL_CREATE_DECLARATION)]);

	React.useEffect(() => {
		if (register && isOpen(MODAL_CREATE_DECLARATION)) {
			form.reset({
				createdAt: register.createdAt,
				quote: register.quote.toFixed(4).replace(".", ","),
				registration: register.registration,
				expenses: register.expenses,
				invoiceId: register.invoiceId,
			});
		} else {
			form.reset({
				createdAt: new Date(),
				quote: "",
				registration: "",
				expenses: [],
				invoiceId: "",
			});
		}
	}, [isOpen, register, form.reset]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		form.watch((values) => {
			const invoice = invoices.find((i) => i.id === values.invoiceId);
			if (!invoice) return;
			setDeclaration(
				Declaration.instance({
					invoice: Invoice.create({
						...invoice,
						quote: 0,
					}),
					quote: Number(values.quote?.replace(",", ".")),
					registration: values.registration ?? "",
					createdAt: values.createdAt ?? new Date(),
					expenses:
						values.expenses?.map((e) => {
							return ExpenseDeclaration.create({
								amount: e?.amount ?? 0,
								expense: Expense.create({
									allocationMethod:
										e?.allocationMethod as Expense.AllocationMethod,
									currency: e?.currency as Expense.Currency,
									name: e?.name ?? "",
									useCustomsBase: e?.useCustomsBase,
									useICMSBase: e?.useICMSBase,
								}),
							});
						}) ?? [],
					id: "1",
				}),
			);
		});
	}, []);

	function onSubmit(values: z.infer<typeof formSchema>) {
		mutate({
			...values,
			quote: Number(values.quote?.replace(",", ".") ?? "0"),
			id: register?.id ?? null,
		});
	}

	return (
		<Drawer
			open={isOpen(MODAL_CREATE_DECLARATION)}
			onOpenChange={(open) => toggleModal(MODAL_CREATE_DECLARATION, open)}
		>
			<DrawerContent className="h-screen !max-h-[90vh]">
				<div className="mx-auto w-full overflow-auto container">
					<DrawerHeader>
						<DrawerTitle>Nova DI</DrawerTitle>
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
											<FormLabel>Número da DI</FormLabel>
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
											<FormLabel>Data registro</FormLabel>
											<FormControl>
												<Popover>
													<PopoverTrigger asChild>
														<FormControl>
															<Button
																variant={"outline"}
																className={cn(
																	"w-full pl-3 text-left font-normal",
																	!field.value && "text-muted-foreground",
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
											<FormLabel>Cotação final</FormLabel>
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
								name="invoiceId"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Invoice</FormLabel>
										<Select value={field.value} onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger
													disabled={!invoices.length}
													className="w-full"
												>
													<SelectValue
														placeholder={
															!invoices.length
																? "Cadastre uma invoice para continuar"
																: "Selecione"
														}
													/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{invoices
													.filter((i) =>
														register?.invoiceId
															? register.invoiceId === i.id
															: true,
													)
													.map((invoice) => (
														<SelectItem
															value={String(invoice.id)}
															key={invoice.id}
														>
															{invoice.registration} -{" "}
															{invoice.createdAt.toLocaleDateString("pt-BR")}
														</SelectItem>
													))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<h1 className="font-bold">Despesas</h1>
							<FormField
								control={form.control}
								name="expenses"
								render={({ field }) => {
									const expensesFiltered = expenses.filter(
										(e) => !field.value?.map((i) => i.name).includes(e.name),
									);
									return (
										<FormItem>
											<FormControl>
												<table className="max-w-md">
													<tbody>
														{declaration?.expenses.map(
															({ expense, amount }) => {
																const convertValue = (
																	expense.currency === "USD"
																		? form.getValues().quote
																			? amount *
																				Number(
																					form
																						.getValues()
																						.quote?.replace(",", "."),
																				)
																			: amount
																		: amount
																)
																	.toFixed(2)
																	.replace(".", ",");
																return (
																	<>
																		<tr key={expense.name + 1}>
																			<td className="py-2">{expense.name}</td>
																		</tr>
																		<tr key={expense.name + 2}>
																			<td className="max-w-[100px]">
																				<div className="flex items-center border">
																					<span className="pl-2 text-muted-foreground">
																						{expense.currency}
																					</span>
																					<Input
																						defaultValue={
																							amount
																								.toFixed(2)
																								.replace(".", ",") ?? "0,00"
																						}
																						onChange={formatDecimal(
																							{
																								onChange(event) {
																									field.onChange(
																										field.value.map((e) => {
																											if (
																												e.name !== expense.name
																											)
																												return e;
																											return {
																												...e,
																												amount: Number(
																													event.currentTarget.value.replace(
																														",",
																														".",
																													),
																												),
																											};
																										}),
																									);
																								},
																							},
																							2,
																						)}
																						className="border-0 rounded-none outline-0 shadow-none focus-visible:ring-0"
																					/>
																				</div>
																			</td>
																			<td className="max-w-[100px]">
																				<div
																					data-hidden={
																						expense.currency === "BRL"
																					}
																					className="flex data-[hidden=true]:hidden items-center border-y bg-muted border-r"
																				>
																					<span className="pl-2 text-muted-foreground">
																						R$
																					</span>
																					<Input
																						value={convertValue}
																						disabled
																						className="border-0 rounded-none outline-0 shadow-none focus-visible:ring-0"
																					/>
																				</div>
																			</td>
																			<td className="px-4 w-[20px]">
																				<Button
																					type="button"
																					size="icon"
																					variant="destructive"
																					className="cursor-pointer"
																					onClick={() => {
																						field.onChange(
																							field.value.filter(
																								(e) => expense.name !== e.name,
																							),
																						);
																					}}
																				>
																					<Trash />
																				</Button>
																			</td>
																		</tr>
																		<tr key={expense.name + 3}>
																			<td className="py-2" />
																		</tr>
																	</>
																);
															},
														)}
														<tr>
															<td className="py-4" />
															<td />
															<td />
														</tr>
														<tr>
															<td colSpan={3} className="border">
																<Select
																	onValueChange={(value) => {
																		const expense = expensesFiltered.find(
																			(e) => e.id === value,
																		);
																		field.onChange([
																			...(field.value ?? []),
																			{
																				...expense,
																				amount: 0,
																			},
																		]);
																	}}
																	value=""
																>
																	<FormControl>
																		<SelectTrigger
																			disabled={!expensesFiltered.length}
																			className="w-full border-0 rounded-none shadow-none"
																		>
																			<SelectValue
																				placeholder={
																					!expenses.length
																						? "Cadastre uma despesa pra continuar"
																						: "Adicione a despesa"
																				}
																			/>
																		</SelectTrigger>
																	</FormControl>
																	<SelectContent>
																		{expensesFiltered.map((expense) => (
																			<SelectItem
																				value={String(expense.id)}
																				key={expense.id}
																			>
																				{expense.name}
																			</SelectItem>
																		))}
																	</SelectContent>
																</Select>
															</td>
														</tr>
													</tbody>
												</table>
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
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
