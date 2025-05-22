"use server";
import { CreateInvoice } from "@/core/application/usecases/create-invoice";
import { UpdateInvoice } from "@/core/application/usecases/update-invoice";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import {
	createInvoiceInputSchema,
	listInvoiceOutputSchema,
	removeInvoiceInputSchema,
} from "./invoice-schema";

const invoiceRepository = InvoiceDatabaseRepository.instance();

export const createInvoiceAction = createServerAction()
	.input(createInvoiceInputSchema)
	.handler(async ({ input }) => {
		if (!input.id) {
			const createInvoice = CreateInvoice.instance();
			await createInvoice.execute(input);
			revalidatePath("/invoices", "page");
			revalidatePath("/declarations", "page");
			return;
		}
		const updateInvoice = UpdateInvoice.instance();
		await updateInvoice.execute({
			...input,
			id: input.id,
		});
		revalidatePath("/invoices", "page");
		revalidatePath("/declarations", "page");
	});

export const listInvoiceAction = createServerAction()
	.output(listInvoiceOutputSchema)
	.handler(async () => {
		return await invoiceRepository.list();
	});

export const removeInvoiceAction = createServerAction()
	.input(removeInvoiceInputSchema)
	.handler(async ({ input }) => {
		await Promise.all(input.ids.map((id) => invoiceRepository.remove(id)));
		revalidatePath("/invoices", "page");
		revalidatePath("/declarations", "page");
	});
