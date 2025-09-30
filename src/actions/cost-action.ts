"use server";
import { Cost } from "@/core/domain/entities/cost";
import { CostDatabaseRepository } from "@/core/infra/repositories/cost-repository";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import {
  createCostInputSchema,
  listCostOutputSchema,
  removeCostInputSchema,
} from "./cost-schema";

const costRepository = CostDatabaseRepository.instance();

export const createCostAction = createServerAction()
  .input(createCostInputSchema)
  .handler(async ({ input }) => {
    const cost = Cost.instance(input);
    await costRepository.upsert(cost);
    revalidatePath("/costs", "page");
  });

export const listCostAction = createServerAction()
  .output(listCostOutputSchema)
  .handler(async () => {
    return await costRepository.list();
  });

export const removeCostAction = createServerAction()
  .input(removeCostInputSchema)
  .handler(async ({ input }) => {
    await Promise.all(input.ids.map((id) => costRepository.remove(id)));
    revalidatePath("/costs", "page");
  });
