"use server";

import { SaleTable } from "@/core/domain/entities/sale-table";
import { SaleTableDatabaseRepository } from "@/core/infra/repositories/sale-table-repository";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import {
  createSaleTableInputSchema,
  listSaleTableOutputSchema,
  removeSaleTableInputSchema,
  saleTableImportInfoInputSchema,
  saleTableImportInfoOutputSchema,
} from "./sale-table-schema";

const saleTableRepository = SaleTableDatabaseRepository.instance();

export const createSaleTableAction = createServerAction()
  .input(createSaleTableInputSchema)
  .handler(async ({ input }) => {
    const saleTable = SaleTable.instance({
      id: input.id ?? undefined,
      productId: input.productId,
      lastImportationAt: input.lastImportationAt,
      lastImportationQuote: input.lastImportationQuote,
      dollarQuote: input.dollarQuote,
      dollarQuoteDate: input.dollarQuoteDate,
      typeDollarQuote: input.typeDollarQuote,
      costPriceUsd: input.costPriceUsd,
      costPriceBrl: input.costPriceBrl,
    });

    await saleTableRepository.upsert(saleTable);
    revalidatePath("/sale-tables", "page");
  });

export const listSaleTableAction = createServerAction()
  .output(listSaleTableOutputSchema)
  .handler(async () => {
    return await saleTableRepository.list();
  });

export const removeSaleTableAction = createServerAction()
  .input(removeSaleTableInputSchema)
  .handler(async ({ input }) => {
    await Promise.all(input.ids.map((id) => saleTableRepository.remove(id)));
    revalidatePath("/sale-tables", "page");
  });

export const getSaleTableImportInfoAction = createServerAction()
  .input(saleTableImportInfoInputSchema)
  .output(saleTableImportInfoOutputSchema)
  .handler(async ({ input }) => {
    const info = await saleTableRepository.findLastImportation(
      input.productId,
      "encerrada"
    );
    if (!info) return null;
    return {
      createdAt: info.createdAt.toISOString(),
      quote: info.quote,
    };
  });
