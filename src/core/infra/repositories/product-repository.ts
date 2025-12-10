import { eq } from "drizzle-orm"
import { db } from "../database" // ✅ usa instância única
import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper"
import { Product } from "@/core/domain/entities/product"
import { ProductNCM } from "@/core/domain/value-objects/product-ncm"
import { ncms, productEvents, products } from "../database/schemas"

export class ProductDatabaseRepository {
  private format(v: number | null) {
    // @ts-ignore
    return FormatFloatNumberHelper.format(v)
  }

  async retrieve(id: string): Promise<Product | null> {
    try {
      const rows = await db
        .select({
          product: products,
          ncm: ncms,
        })
        .from(products)
        .leftJoin(ncms, eq(products.ncmId, ncms.id))
        .where(eq(products.id, id))

      const row = rows[0]
      if (!row || !row.product) return null

      return Product.instance({
        id: row.product.id,
        tid: row.product.tid,
        name: row.product.name,
        description: row.product.description,
        height: this.format(row.product.height),
        length: this.format(row.product.length),
        weight: this.format(row.product.weight),
        width: this.format(row.product.width),
        // @ts-ignore
        ncm: row.ncm
          ? ProductNCM.create({
              id: row.ncm.id,
              code: row.ncm.code,
              cofins: this.format(row.ncm.cofins),
              icms: this.format(row.ncm.icms),
              ipi: this.format(row.ncm.ipi),
              pis: this.format(row.ncm.pis),
              tax: this.format(row.ncm.tax),
            })
          : null,
      })
    } catch (err) {
      console.error("❌ Error retrieving product:", err)
      throw new Error("Failed to retrieve product")
    }
  }

  async save(product: Product): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx.insert(products).values({
          id: product.id,
          name: product.name,
          tid: product.tid,
          description: product.description,
          height: FormatFloatNumberHelper.toPersist(product.height),
          length: FormatFloatNumberHelper.toPersist(product.length),
          weight: FormatFloatNumberHelper.toPersist(product.weight),
          width: FormatFloatNumberHelper.toPersist(product.width),
          ncmId: product.ncm.id,
        })

        await tx.insert(productEvents).values({
          productId: product.id,
          type: "CREATED",
          payload: product,
        })
      })
    } catch (err) {
      console.error("❌ Error saving product:", err)
      throw new Error("Failed to save product")
    }
  }

  async update(product: Product): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx
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
          .where(eq(products.id, product.id))

        await tx.insert(productEvents).values({
          productId: product.id,
          type: "UPDATED",
          payload: product,
        })
      })
    } catch (err) {
      console.error("❌ Error updating product:", err)
      throw new Error("Failed to update product")
    }
  }

  async list(): Promise<Product[]> {
    try {
      const rows = await db
        .select({
          product: products,
          ncm: ncms,
        })
        .from(products)
        .leftJoin(ncms, eq(products.ncmId, ncms.id))

      return rows.map((row) =>
        Product.instance({
          id: row.product.id,
          tid: row.product.tid,
          name: row.product.name,
          description: row.product.description,
          height: this.format(row.product.height),
          length: this.format(row.product.length),
          weight: this.format(row.product.weight),
          width: this.format(row.product.width),
          // @ts-ignore
          ncm: row.ncm
            ? ProductNCM.create({
                id: row.ncm.id,
                code: row.ncm.code,
                cofins: this.format(row.ncm.cofins),
                icms: this.format(row.ncm.icms),
                ipi: this.format(row.ncm.ipi),
                pis: this.format(row.ncm.pis),
                tax: this.format(row.ncm.tax),
              })
            : null,
        })
      )
    } catch (err) {
      console.error("❌ Error listing products:", err)
      throw new Error("Failed to list products")
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await db.transaction(async (tx) => {
        await tx.delete(products).where(eq(products.id, id))
        await tx.insert(productEvents).values({
          productId: id,
          type: "DELETED",
          payload: { id },
        })
      })
    } catch (err) {
      console.error("❌ Error deleting product:", err)
      throw new Error("Failed to delete product")
    }
  }
  static instance() {
    return new ProductDatabaseRepository();
  }
}

export const productRepository = new ProductDatabaseRepository()
