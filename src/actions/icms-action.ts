"use server";
import { ICMS } from "@/core/domain/entities/icms";
import { ICMSDatabaseRepository } from "@/core/infra/repositories/icms-repository";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import {
  createICMSInputSchema,
  listICMSOutputSchema,
  removeICMSInputSchema,
} from "./icms-schema";

const icmsRepository = ICMSDatabaseRepository.instance();

export const createICMSAction = createServerAction()
  .input(createICMSInputSchema)
  .handler(async ({ input }) => {
    const icms = ICMS.instance(input);
    await icmsRepository.upsert(icms);
    revalidatePath("/icms", "page");
  });

export const listICMSAction = createServerAction()
  .output(listICMSOutputSchema)
  .handler(async () => {
    return await icmsRepository.list();
  });

export const removeICMSAction = createServerAction()
  .input(removeICMSInputSchema)
  .handler(async ({ input }) => {
    await Promise.all(input.ids.map((id) => icmsRepository.remove(id)));
    revalidatePath("/icms", "page");
  });
