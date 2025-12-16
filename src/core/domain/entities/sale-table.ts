export namespace SaleTable {
  export interface Props {
    id: string;
    productId: string;
    lastImportationAt: Date | null;
    lastImportationQuote: number | null;
    dollarQuote: number;
    dollarQuoteDate: Date | null;
    costPriceUsd: number;
    costPriceBrl: number;
    createdAt: Date;
    updatedAt: Date;
    typeDollarQuote: "CURRENT" | "LAST_DI" | "FUTURE";
  }

  export interface CreateProps {
    id?: string | null;
    productId: string;
    lastImportationAt: Date | null;
    lastImportationQuote: number | null;
    dollarQuote: number;
    dollarQuoteDate: Date | null;
    costPriceUsd: number;
    costPriceBrl: number;
  }

  export type WithProduct<TProduct> = SaleTable & {
    product: TProduct;
  };
}

export class SaleTable {
  public id: string;
  public productId: string;
  public lastImportationAt: Date | null;
  public lastImportationQuote: number | null;
  public dollarQuote: number;
  public dollarQuoteDate: Date | null;
  public costPriceUsd: number;
  public costPriceBrl: number;
  public createdAt: Date;
  public updatedAt: Date;
  public typeDollarQuote: "CURRENT" | "LAST_DI" | "FUTURE";

  constructor(props: SaleTable.Props) {
    this.id = props.id;
    this.productId = props.productId;
    this.lastImportationAt = props.lastImportationAt;
    this.lastImportationQuote = props.lastImportationQuote;
    this.dollarQuote = props.dollarQuote;
    this.dollarQuoteDate = props.dollarQuoteDate;
    this.typeDollarQuote = props.typeDollarQuote;
    this.costPriceUsd = props.costPriceUsd;
    this.costPriceBrl = props.costPriceBrl;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static instance(props: Partial<SaleTable.Props>) {
    return new SaleTable({
      id: props.id ?? crypto.randomUUID().toString(),
      productId: props.productId ?? "",
      lastImportationAt: props.lastImportationAt ?? null,
      lastImportationQuote: props.lastImportationQuote ?? null,
      dollarQuote: props.dollarQuote ?? 0,
      dollarQuoteDate: props.dollarQuoteDate ?? null,
      costPriceUsd: props.costPriceUsd ?? 0,
      costPriceBrl: props.costPriceBrl ?? 0,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
      typeDollarQuote: props.typeDollarQuote ?? "CURRENT",
    });
  }
}
