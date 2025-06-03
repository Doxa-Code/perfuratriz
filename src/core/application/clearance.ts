import type { Declaration } from "../domain/entities/declaration";
import { Expense } from "../domain/entities/expense";
import { ExpenseDeclaration } from "../domain/entities/expense-declaration";
import type { InvoiceProduct } from "../domain/entities/invoice-product";

export class Clearance {
	constructor(private readonly declaration: Declaration) {}

	sumAll = 0;

	private get invoice() {
		return this.declaration.invoice;
	}

	private convertAmount(amount: number) {
		return amount * this.declaration.quote;
	}

	private get freightExpense() {
		const expense = this.declaration.expenses.find(
			(e) => e.expense.name === "Frete Internacional",
		);

		if (!expense)
			return ExpenseDeclaration.create({
				amount: 0,
				expense: Expense.create({
					allocationMethod: "NET_WEIGHT",
					currency: "USD",
					name: "Frete Internacional",
					useCustomsBase: true,
					useICMSBase: false,
				}),
			});

		return expense;
	}

	private get insuranceExpense() {
		const expense = this.declaration.expenses.find(
			(e) => e.expense.name === "Seguro Internacional",
		);

		if (!expense)
			return ExpenseDeclaration.create({
				amount: 0,
				expense: Expense.create({
					allocationMethod: "NET_VALUE",
					currency: "USD",
					name: "Seguro Internacional",
					useCustomsBase: true,
					useICMSBase: false,
				}),
			});

		return expense;
	}

	private get siscomexExpense() {
		const expense = this.declaration.expenses.find(
			(e) => e.expense.name === "Siscomex",
		);

		if (!expense)
			return ExpenseDeclaration.create({
				amount: 0,
				expense: Expense.create({
					allocationMethod: "NET_VALUE",
					currency: "BRL",
					name: "Siscomex",
					useCustomsBase: false,
					useICMSBase: true,
				}),
			});

		return expense;
	}

	private convertExpenseAmount(expense: ExpenseDeclaration) {
		return expense.expense.currency === "USD"
			? this.convertAmount(expense.amount)
			: expense.amount;
	}

	private costAllocationPerWeight(
		product: InvoiceProduct,
		expense: ExpenseDeclaration,
	) {
		const result = product.weight / this.invoice.weight;
		const expenseAmount = this.convertExpenseAmount(expense);
		return result * expenseAmount;
	}

	private costAllocationPerAmount(
		product: InvoiceProduct,
		expense: ExpenseDeclaration,
	) {
		const percentage = product.total / this.invoice.amount;
		const expenseAmount = this.convertExpenseAmount(expense);
		return percentage * expenseAmount;
	}

	private costAllocationPerUnit(
		product: InvoiceProduct,
		expense: ExpenseDeclaration,
	) {
		const result = product.quantity / this.invoice.quantity;
		const expenseAmount = this.convertExpenseAmount(expense);
		return result * expenseAmount;
	}

	private calculateInvoiceProduct(product: InvoiceProduct) {
		const freightCostAllocation = this.costAllocationPerWeight(
			product,
			this.freightExpense,
		);

		const insuranceCostAllocation = this.costAllocationPerAmount(
			product,
			this.insuranceExpense,
		);

		const siscomexCostAllocation = this.costAllocationPerAmount(
			product,
			this.siscomexExpense,
		);

		const allocationMethodHandles = new Map([
			["NET_VALUE", this.costAllocationPerAmount.bind(this)],
			["NET_WEIGHT", this.costAllocationPerWeight.bind(this)],
			["PER_UNIT", this.costAllocationPerUnit.bind(this)],
		]);

		let customsAmount = this.convertAmount(product.total);

		for (const expense of this.declaration.expenses) {
			if (expense.expense.useCustomsBase) {
				const allocationMethodHandle = allocationMethodHandles.get(
					expense.expense.allocationMethod,
				);
				customsAmount += allocationMethodHandle?.(product, expense) ?? 0;
			}
		}

		// Valor aduaneiro = Reais a partir daqui

		const tax = (product.product.ncm.tax * customsAmount) / 100;
		const pis = (product.product.ncm.pis * customsAmount) / 100;
		const cofins = (10.65 * customsAmount) / 100;

		const ipi = ((customsAmount + tax) * product.product.ncm.ipi) / 100;

		let sumTax = tax + pis + cofins + ipi;

		sumTax += customsAmount;

		for (const expense of this.declaration.expenses) {
			if (expense.expense.useICMSBase) {
				const allocationMethodHandle = allocationMethodHandles.get(
					expense.expense.allocationMethod,
				);
				sumTax += allocationMethodHandle?.(product, expense) ?? 0;
			}
		}

		const icms =
			(sumTax / (100 - product.product.ncm.icms)) * product.product.ncm.icms;

		const expenses = this.declaration.expenses.reduce(
			(acc, expense) => {
				if (expense.expense.useCustomsBase || expense.expense.useICMSBase)
					return acc;
				const allocationMethodHandle = allocationMethodHandles.get(
					expense.expense.allocationMethod,
				);
				acc.push({
					expense: expense.expense.name,
					result: allocationMethodHandle?.(product, expense) ?? 0,
				});
				return acc;
			},
			[] as { expense: string; result: number }[],
		);

		const expenseTotalAmount = expenses.reduce(
			(sum, expense) => sum + expense.result,
			0,
		);

		const finalAmount =
			(customsAmount + tax + expenseTotalAmount) / product.quantity;

		const costPrice = product.amount * this.invoice.quote;

		const factor = finalAmount / costPrice;

		return {
			customsAmount,
			tax,
			icms,
			siscomexCostAllocation,
			freightCostAllocation,
			insuranceCostAllocation,
			expenseTotalAmount,
			expenses,
			finalAmount,
			factor,
			ipi,
			pis,
			cofins,
			costPrice,
		};
	}

	getExpenseAmounts(expense: ExpenseDeclaration) {
		return expense.expense.currency === "BRL"
			? { brl: expense.amount }
			: {
					usd: expense.amount,
					brl: this.convertExpenseAmount(expense),
				};
	}

	get vmld() {
		return (
			this.vmle + this.freightExpense.amount + this.insuranceExpense.amount
		);
	}

	get vmle() {
		const expense = this.declaration.expenses.find(
			(e) => e.expense.name === "Total Acres. Trib.",
		);
		return this.invoice.amount + (expense?.amount ?? 0);
	}

	calculate() {
		const products = this.invoice.products.map((p) => {
			const taxCalculated = this.calculateInvoiceProduct(p);
			return {
				name: p.product.name,
				quantity: p.quantity,
				amount: p.amount,
				total: p.total,
				insurance: taxCalculated.insuranceCostAllocation,
				freight: taxCalculated.freightCostAllocation,
				customs: taxCalculated.customsAmount,
				siscomex: taxCalculated.siscomexCostAllocation,
				ipi: taxCalculated.ipi,
				pis: taxCalculated.pis,
				cofins: taxCalculated.cofins,
				expensesTotalAmount: taxCalculated.expenseTotalAmount,
				factor: taxCalculated.factor,
				finalAmount: taxCalculated.finalAmount,
				icms: taxCalculated.icms,
				tax: taxCalculated.tax,
				costPrice: taxCalculated.costPrice,
			};
		});
		const customs = products.reduce((sum, p) => sum + p.customs, 0);
		const ipi = products.reduce((sum, p) => sum + p.ipi, 0);
		const pis = products.reduce((sum, p) => sum + p.pis, 0);
		const cofins = products.reduce((sum, p) => sum + p.cofins, 0);
		const icms = products.reduce((sum, p) => sum + p.icms, 0);
		const tax = products.reduce((sum, p) => sum + p.tax, 0);
		const finalAmount = products.reduce((sum, p) => sum + p.finalAmount, 0);
		const expensesTotalAmountByProduct = products.reduce(
			(sum, p) => sum + p.expensesTotalAmount,
			0,
		);
		const costPrice = products.reduce((sum, p) => sum + p.costPrice, 0);
		return {
			costPrice,
			tax,
			cofins,
			pis,
			ipi,
			icms,
			finalAmount,
			expensesTotalAmountByProduct,
			invoiceQuote: this.invoice.quote,
			declarationQuote: this.declaration.quote,
			freight: this.getExpenseAmounts(this.freightExpense),
			insurance: this.getExpenseAmounts(this.insuranceExpense),
			siscomex: this.getExpenseAmounts(this.siscomexExpense),
			customs,
			vmle: this.vmle,
			vmldBRL: this.convertAmount(this.vmld),
			vmld: this.vmld,
			weight: this.invoice.weight,
			quantity: this.invoice.quantity,
			amount: this.invoice.amount,
			expensesTotalAmount: this.declaration.expenses.reduce(
				(sum, expense) =>
					sum +
					(expense.expense.currency === "USD"
						? expense.amount * this.declaration.quote
						: expense.amount),
				0,
			),
			expenses: this.declaration.expenses,
			products,
		};
	}

	static create(declaration: Declaration) {
		return new Clearance(declaration);
	}
}
