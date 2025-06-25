import { CreateInvoice } from "@/core/application/usecases/create-invoice";
import { CreateNCM } from "@/core/application/usecases/create-ncm";
import { CreateProduct } from "@/core/application/usecases/create-product";
import { UpdateInvoice } from "@/core/application/usecases/update-invoice";
import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import { Product } from "@/core/domain/entities/product";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { PrismaClient } from "../prisma";

const products = [
	Product.create({
		name: "product 1",
		height: 1,
		length: 1,
		weight: 1,
		width: 1,
		ncm: {
			id: "1",
			code: 1,
			cofins: 1,
			icms: 1,
			ipi: 1,
			pis: 1,
			tax: 1,
		},
		description: "",
		tid: "",
	}),
	Product.create({
		name: "product 2",
		height: 2,
		length: 2,
		weight: 2,
		width: 2,
		ncm: {
			id: "2",
			code: 2,
			cofins: 2,
			icms: 2,
			ipi: 2,
			pis: 2,
			tax: 2,
		},
		description: "",
		tid: "",
	}),
];

test("invoice", () => {
	const invoice = Invoice.create({
		registration: "PHTBR-000987",
		createdAt: new Date(),
		quote: 5.9995,
	});

	expect(invoice.products.length).toBe(0);
	expect(invoice.quantity).toBe(0);
	expect(invoice.amount).toBe(0);
	expect(invoice.weight).toBe(0);
	expect(invoice.volume).toBe(0);

	products.map((product) => {
		invoice.add(
			InvoiceProduct.create({
				product,
				quantity: 10,
				amount: 2,
			}),
		);
	});

	expect(invoice.products.length).toBe(2);
	expect(invoice.quantity).toBe(20);
	expect(invoice.amount).toBe(40);
	expect(invoice.weight).toBe(30);
	expect(invoice.volume).toBe(90);
});

test(
	"create and update invoice",
	async () => {
		const createNCM = CreateNCM.instance();
		const createProduct = CreateProduct.instance();
		const ncm = await createNCM.execute({
			code: 1,
			cofins: 1,
			icms: 1,
			ipi: 1,
			pis: 1,
			tax: 1,
		});

		const products = await Promise.all([
			createProduct.execute({
				height: 1,
				length: 1,
				name: "Product 1",
				ncm: ncm.id,
				weight: 1,
				width: 1,
				description: "",
				tid: "",
			}),
			createProduct.execute({
				height: 2,
				length: 2,
				name: "Product 2",
				ncm: ncm.id,
				weight: 2,
				width: 2,
				description: "",
				tid: "",
			}),
		]);

		const createInvoice = CreateInvoice.instance();
		const updateInvoice = UpdateInvoice.instance();
		const invoiceRepository = InvoiceDatabaseRepository.instance();

		const invoice = await createInvoice.execute({
			registration: "PHTBR-000987",
			quote: 5.9995,
			products: products.map((p) => ({
				productId: p.id,
				quantity: 10,
				amount: 2,
			})),
		});

		const list = await invoiceRepository.list();

		expect(list.map((i) => i.id)).toContain(invoice.id);

		expect(invoice.products.length).toBe(2);
		expect(invoice.quantity).toBe(20);
		expect(invoice.amount).toBe(40);
		expect(invoice.weight).toBe(30);
		expect(invoice.volume).toBe(90);
		expect(invoice.quote).toBe(5.9995);

		await updateInvoice.execute({
			id: invoice.id,
			registration: "PHTBR-000987",
			quote: 5.8889,
			products: products.map((p) => ({
				productId: p.id,
				quantity: 20,
				amount: 2,
			})),
		});

		const listUpdated = await invoiceRepository.list();

		expect(listUpdated.at(0)?.quote).toBe(5.8889);
		expect(listUpdated.at(0)?.products.at(0)?.quantity).toBe(20);
		expect(listUpdated.at(0)?.products.at(1)?.quantity).toBe(20);

		await new PrismaClient().invoice.deleteMany({
			where: {
				id: invoice.id,
			},
		});
		await new PrismaClient().invoiceProduct.deleteMany({
			where: {
				id: {
					in: invoice.products.map((p) => p.id),
				},
			},
		});
		await new PrismaClient().nCM.deleteMany({
			where: {
				id: ncm.id,
			},
		});
		await Promise.all(
			products.map((p) =>
				new PrismaClient().product.deleteMany({
					where: { id: p.id },
				}),
			),
		);
	},
	Number.POSITIVE_INFINITY,
);
