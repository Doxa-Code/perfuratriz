import { Clearance } from "@/core/application/clearance";
import { CreateDeclaration } from "@/core/application/usecases/create-declaration";
import { CreateExpense } from "@/core/application/usecases/create-expense";
import { CreateInvoice } from "@/core/application/usecases/create-invoice";
import { CreateNCM } from "@/core/application/usecases/create-ncm";
import { CreateProduct } from "@/core/application/usecases/create-product";
import { Declaration } from "@/core/domain/entities/declaration";
import { Expense } from "@/core/domain/entities/expense";
import { ExpenseDeclaration } from "@/core/domain/entities/expense-declaration";
import { Invoice } from "@/core/domain/entities/invoice";
import { InvoiceProduct } from "@/core/domain/entities/invoice-product";
import { NCM } from "@/core/domain/entities/ncm";
import { Product } from "@/core/domain/entities/product";
import { DeclarationDatabaseRepository } from "@/core/infra/repositories/declaration-repository";
import { ExpenseDatabaseRepository } from "@/core/infra/repositories/expense-repository";
import { InvoiceDatabaseRepository } from "@/core/infra/repositories/invoice-repository";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";

test(
	"clearance",
	async () => {
		const ncm1 = NCM.create({
			code: 84314390,
			cofins: 9.65,
			icms: 18,
			ipi: 3.25,
			pis: 2.1,
			tax: 11.2,
		});

		const ncm2 = NCM.create({
			code: 82071910,
			cofins: 9.65,
			icms: 8.8,
			ipi: 5.2,
			pis: 2.1,
			tax: 0,
		});

		const product1 = Product.create({
			name: "Pistão M60",
			height: 1,
			length: 1,
			width: 1,
			weight: 19.5,
			ncm: ncm1,
			description: "",
			tid: "",
		});

		const product2 = Product.create({
			name: "Bit 155 M60",
			height: 1,
			length: 1,
			width: 1,
			weight: 21,
			ncm: ncm2,
			description: "",
			tid: "",
		});

		const invoice = Invoice.create({
			registration: "TH-PHT231107",
			quote: 4.8889,
		});

		invoice.add(
			InvoiceProduct.create({
				product: product1,
				amount: 290,
				quantity: 200,
			}),
		);

		invoice.add(
			InvoiceProduct.create({
				product: product2,
				amount: 241,
				quantity: 500,
			}),
		);

		expect(invoice.weight).toBe(14400);
		expect(invoice.amount).toBe(178500);

		const expenses = [
			Expense.create({
				allocationMethod: "NET_VALUE",
				currency: "USD",
				name: "Seguro Internacional",
				useCustomsBase: true,
				useICMSBase: false,
			}),
			Expense.create({
				allocationMethod: "NET_WEIGHT",
				currency: "USD",
				name: "Frete Internacional",
				useCustomsBase: true,
				useICMSBase: false,
			}),
			Expense.create({
				allocationMethod: "NET_VALUE",
				currency: "BRL",
				name: "Siscomex",
				useCustomsBase: false,
				useICMSBase: true,
			}),
			Expense.create({
				allocationMethod: "PER_UNIT",
				currency: "BRL",
				name: "Despachante",
				useCustomsBase: false,
				useICMSBase: false,
			}),
			Expense.create({
				allocationMethod: "PER_UNIT",
				currency: "BRL",
				name: "SDA",
				useCustomsBase: false,
				useICMSBase: false,
			}),
			Expense.create({
				allocationMethod: "NET_VALUE",
				currency: "USD",
				name: "Total Acres Trib",
				useCustomsBase: true,
				useICMSBase: false,
			}),
		];

		const declaration = Declaration.create({
			registration: "24/0461899-6",
			quote: 4.9596,
			invoice,
		});

		declaration.addExpense(
			ExpenseDeclaration.create({
				expense: expenses[0],
				amount: 357.87,
			}),
		);
		declaration.addExpense(
			ExpenseDeclaration.create({
				expense: expenses[1],
				amount: 655.5,
			}),
		);
		declaration.addExpense(
			ExpenseDeclaration.create({
				expense: expenses[2],
				amount: 192.79,
			}),
		);
		declaration.addExpense(
			ExpenseDeclaration.create({
				expense: expenses[3],
				amount: 1000,
			}),
		);
		declaration.addExpense(
			ExpenseDeclaration.create({
				expense: expenses[4],
				amount: 300,
			}),
		);
		declaration.addExpense(
			ExpenseDeclaration.create({
				expense: expenses[5],
				amount: 202.2,
			}),
		);

		const clearance = Clearance.create(declaration);

		const result = clearance.calculate();

		console.log(result);
	},
	Number.POSITIVE_INFINITY,
);
