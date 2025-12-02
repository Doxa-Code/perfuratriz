import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import { Product } from "@/core/domain/entities/product";

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

// Este teste de integração foi removido da suíte padrão
// pois dependia de banco de dados real (Postgres) e repositórios.
// Caso queira reintroduzir o cenário de integração, é melhor
// usar um ambiente de teste com DB configurado ou mocks dedicados.
