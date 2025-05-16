"use server";
import { CreateNCM } from "@/core/application/usecases/create-ncm";
import { NCM } from "@/core/domain/entities/ncm";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import {
  createNCMInputSchema,
  listNCMOutputSchema,
  removeNCMInputSchema,
} from "./ncm-schema";

const ncmRepository = NCMDatabaseRepository.instance();

export const createNCMAction = createServerAction()
  .input(createNCMInputSchema)
  .handler(async ({ input }) => {
    if (!input.id) {
      const createNCM = CreateNCM.instance();
      await createNCM.execute(input);
      revalidatePath("/ncms", "page");
      revalidatePath("/products", "page");
      return;
    }
    const ncm = NCM.instance({
      ...input,
      id: input.id,
    });
    await ncmRepository.update(ncm);
    revalidatePath("/ncms", "page");
    revalidatePath("/products", "page");
  });

export const listNCMAction = createServerAction()
  .output(listNCMOutputSchema)
  .handler(async () => {
    return await ncmRepository.list();
  });

export const removeNCMAction = createServerAction()
  .input(removeNCMInputSchema)
  .handler(async ({ input }) => {
    await Promise.all(input.ids.map((id) => ncmRepository.remove(id)));
    revalidatePath("/ncms", "page");
    revalidatePath("/products", "page");
  });
