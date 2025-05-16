"use server";
import { CreateProduct } from "@/core/application/usecases/create-product";
import { Product } from "@/core/domain/entities/product";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";
import {
  createProductInputSchema,
  listProductOutputSchema,
  removeProductInputSchema,
} from "./product-schema";

const ncmRepository = NCMDatabaseRepository.instance();
const productRepository = ProductDatabaseRepository.instance();

export const createProductAction = createServerAction()
  .input(createProductInputSchema)
  .handler(async ({ input }) => {
    if (!input.id) {
      const createProduct = CreateProduct.instance();
      await createProduct.execute(input);
      revalidatePath("/products", "page");
      return;
    }
    const ncm = await ncmRepository.retrieve(input.ncm);
    if (!ncm) return revalidatePath("/products", "layout");
    const product = Product.instance({
      ...input,
      id: input.id,
      ncm,
    });
    await productRepository.update(product).catch((err) => console.log(err));
    revalidatePath("/products", "page");
  });

export const listProductAction = createServerAction()
  .output(listProductOutputSchema)
  .handler(async () => {
    return await productRepository.list();
  });

export const removeProductAction = createServerAction()
  .input(removeProductInputSchema)
  .handler(async ({ input }) => {
    await Promise.all(input.ids.map((id) => productRepository.remove(id)));
    revalidatePath("/products", "page");
  });
