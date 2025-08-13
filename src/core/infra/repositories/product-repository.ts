import { eq } from "drizzle-orm";
import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
import { Product } from "@/core/domain/entities/product";
import { ProductNCM } from "@/core/domain/value-objects/product-ncm";
import { createDatabaseConnection } from "../database";
import { ncms, productEvents, products } from "../database/schemas";

interface ProductRepository {
  save(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  remove(id: string): Promise<void>;
  list(): Promise<Product[]>;
  retrieve(id: string): Promise<Product | null>;
}

export class ProductDatabaseRepository implements ProductRepository {
  async retrieve(id: string): Promise<Product | null> {
    const db = createDatabaseConnection();

    const rows = await db
      .select({
        product: products,
        ncm: ncms,
      })
      .from(products)
      .leftJoin(ncms, eq(products.ncmId, ncms.id))
      .where(eq(products.id, id));

    await db.$client.end();

    const row = rows[0];
    if (!row || !row.product) return null;

    return Product.instance({
      id: row.product.id,
      tid: row.product.tid,
      name: row.product.name,
      description: row.product.description,
      height: FormatFloatNumberHelper.format(row.product.height),
      length: FormatFloatNumberHelper.format(row.product.length),
      weight: FormatFloatNumberHelper.format(row.product.weight),
      width: FormatFloatNumberHelper.format(row.product.width),
      ncm: ProductNCM.create({
        code: row.ncm!.code,
        cofins: FormatFloatNumberHelper.format(row.ncm!.cofins),
        icms: FormatFloatNumberHelper.format(row.ncm!.icms),
        id: row.ncm!.id,
        ipi: FormatFloatNumberHelper.format(row.ncm!.ipi),
        pis: FormatFloatNumberHelper.format(row.ncm!.pis),
        tax: FormatFloatNumberHelper.format(row.ncm!.tax),
      }),
    });
  }

  async save(product: Product): Promise<void> {
    const db = createDatabaseConnection();

    await db.insert(products).values({
      id: product.id,
      name: product.name,
      tid: product.tid,
      description: product.description,
      height: FormatFloatNumberHelper.toPersist(product.height),
      length: FormatFloatNumberHelper.toPersist(product.length),
      weight: FormatFloatNumberHelper.toPersist(product.weight),
      width: FormatFloatNumberHelper.toPersist(product.width),
      ncmId: product.ncm.id,
    });

    await db.insert(productEvents).values({
      productId: product.id,
      type: "CREATED",
      payload: product,
    });

    await db.$client.end();
  }

  async update(product: Product): Promise<void> {
    const db = createDatabaseConnection();

    await db
      .update(products)
      .set({
        name: product.name,
        tid: product.tid,
        description: product.description,
        height: FormatFloatNumberHelper.toPersist(product.height),
        length: FormatFloatNumberHelper.toPersist(product.length),
        weight: FormatFloatNumberHelper.toPersist(product.weight),
        width: FormatFloatNumberHelper.toPersist(product.width),
        ncmId: product.ncm.id,
      })
      .where(eq(products.id, product.id));

    await db.insert(productEvents).values({
      productId: product.id,
      type: "UPDATED",
      payload: product,
    });

    await db.$client.end();
  }

  async list(): Promise<Product[]> {
    const db = createDatabaseConnection();

    const rows = await db
      .select({
        product: products,
        ncm: ncms,
      })
      .from(products)
      .leftJoin(ncms, eq(products.ncmId, ncms.id));

    await db.$client.end();

    return rows.map((row) =>
      Product.instance({
        id: row.product.id,
        tid: row.product.tid,
        name: row.product.name,
        description: row.product.description,
        height: FormatFloatNumberHelper.format(row.product.height),
        length: FormatFloatNumberHelper.format(row.product.length),
        weight: FormatFloatNumberHelper.format(row.product.weight),
        width: FormatFloatNumberHelper.format(row.product.width),
        ncm: ProductNCM.create({
          code: row.ncm!.code,
          cofins: FormatFloatNumberHelper.format(row.ncm!.cofins),
          icms: FormatFloatNumberHelper.format(row.ncm!.icms),
          id: row.ncm!.id,
          ipi: FormatFloatNumberHelper.format(row.ncm!.ipi),
          pis: FormatFloatNumberHelper.format(row.ncm!.pis),
          tax: FormatFloatNumberHelper.format(row.ncm!.tax),
        }),
      })
    );
  }

  async remove(id: string): Promise<void> {
    const db = createDatabaseConnection();

    await db.delete(products).where(eq(products.id, id));

    await db.insert(productEvents).values({
      productId: id,
      type: "DELETED",
      payload: { id },
    });

    await db.$client.end();
  }

  static instance() {
    return new ProductDatabaseRepository();
  }
}
