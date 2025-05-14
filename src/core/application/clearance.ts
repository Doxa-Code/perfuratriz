import type { Declaration } from "../domain/entities/declaration";
import { Expense } from "../domain/entities/expense";
import { ExpenseDeclaration } from "../domain/entities/expense-declaration";
import type { InvoiceProduct } from "../domain/value-objects/invoice-product";

export class Clearance {
  constructor(private readonly declaration: Declaration) {}

  private get invoice() {
    return this.declaration.invoice;
  }

  private convertAmount(amount: number) {
    return amount * this.declaration.quote;
  }

  private get freightExpense() {
    const expense = this.declaration.expenses.find(
      (e) => e.expense.name === "Frete Internacional"
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
      (e) => e.expense.name === "Seguro Internacional"
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
      (e) => e.expense.name === "Siscomex"
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

  private get otherExpenses() {
    const filterExpense = [
      "Siscomex",
      "Seguro Internacional",
      "Frete Internacional",
    ];
    return this.declaration.expenses.filter(
      (e) => !filterExpense.includes(e.expense.name)
    );
  }

  private convertExpenseAmount(expense: ExpenseDeclaration) {
    return expense.expense.currency === "USD"
      ? this.convertAmount(expense.amount)
      : expense.amount;
  }

  private costAllocationPerWeight(
    product: InvoiceProduct,
    expense: ExpenseDeclaration
  ) {
    const result = product.weight / this.invoice.weight;
    const expenseAmount = this.convertExpenseAmount(expense);
    return result * expenseAmount;
  }

  private costAllocationPerAmount(
    product: InvoiceProduct,
    expense: ExpenseDeclaration
  ) {
    const percentage = product.total / this.invoice.amount;
    const expenseAmount = this.convertExpenseAmount(expense);
    return percentage * expenseAmount;
  }

  private costAllocationPerUnit(
    product: InvoiceProduct,
    expense: ExpenseDeclaration
  ) {
    const result = product.quantity / this.invoice.quantity;
    const expenseAmount = this.convertExpenseAmount(expense);
    return result * expenseAmount;
  }

  private calculateInvoiceProduct(product: InvoiceProduct) {
    const freightCostAllocation = this.costAllocationPerWeight(
      product,
      this.freightExpense
    );

    const insuranceCostAllocation = this.costAllocationPerAmount(
      product,
      this.insuranceExpense
    );

    const siscomexCostAllocation = this.costAllocationPerAmount(
      product,
      this.siscomexExpense
    );

    const customsAmount =
      this.convertAmount(product.total) +
      freightCostAllocation +
      insuranceCostAllocation;

    const tax = (product.product.ncm.tax * customsAmount) / 100;
    const pis = (product.product.ncm.pis * customsAmount) / 100;
    const cofins = (product.product.ncm.cofins * customsAmount) / 100;

    const ipi = ((customsAmount + tax) * product.product.ncm.ipi) / 100;

    const sumTax =
      customsAmount + siscomexCostAllocation + tax + pis + cofins + ipi;

    const icms =
      (sumTax / (100 - product.product.ncm.icms)) * product.product.ncm.icms;

    const allocationMethodHandles = new Map([
      ["NET_VALUE", this.costAllocationPerAmount.bind(this)],
      ["NET_WEIGHT", this.costAllocationPerWeight.bind(this)],
      ["PER_UNIT", this.costAllocationPerUnit.bind(this)],
    ]);

    const expenses = this.otherExpenses.map((expense) => {
      const allocationMethodHandle = allocationMethodHandles.get(
        expense.expense.allocationMethod
      );
      return {
        expense: expense.expense.name,
        result: allocationMethodHandle?.(product, expense) ?? 0,
      };
    });

    const expenseTotalAmount = expenses.reduce(
      (sum, expense) => sum + expense.result,
      0
    );

    const finalAmount =
      (customsAmount + tax + expenseTotalAmount) / product.quantity;

    const factor = finalAmount / (product.amount * this.invoice.quote);

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
      this.invoice.amount +
      this.freightExpense.amount +
      this.insuranceExpense.amount
    );
  }

  calculate() {
    let expensesTotalAmount = 0;
    const products = this.invoice.products.map((p) => {
      const taxCalculated = this.calculateInvoiceProduct(p);
      expensesTotalAmount += taxCalculated.expenseTotalAmount;
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
      };
    });
    return {
      invoiceQuote: this.invoice.quote,
      declarationQuote: this.declaration.quote,
      freight: this.getExpenseAmounts(this.freightExpense),
      insurance: this.getExpenseAmounts(this.insuranceExpense),
      siscomex: this.getExpenseAmounts(this.siscomexExpense),
      vmle: this.invoice.amount,
      vmld: this.vmld,
      weight: this.invoice.weight,
      quantity: this.invoice.quantity,
      expensesTotalAmount,
      expenses: this.otherExpenses,
      products,
    };
  }

  static create(declaration: Declaration) {
    return new Clearance(declaration);
  }
}
