import { Product } from "@/core/domain/entities/product";
import { ProductNCM } from "@/core/domain/value-objects/product-ncm";
import { PrismaClient } from "../../../../prisma";

interface ProductRepository {
  save(product: Product): Promise<void>;
  remove(id: string): Promise<void>;
  list(): Promise<Product[]>;
}

export class ProductDatabaseRepository implements ProductRepository {
  private database = new PrismaClient().product;

  async save(product: Product) {
    await this.database.create({
      data: {
        height: product.height,
        length: product.length,
        weight: product.weight,
        width: product.width,
        id: product.id,
        name: product.name,
        ncm: {
          create: {
            code: product.ncm.code,
            cofins: product.ncm.cofins,
            icms: product.ncm.icms,
            ipi: product.ncm.ipi,
            pis: product.ncm.pis,
            tax: product.ncm.tax,
          },
        },
      },
    });
  }

  async list(): Promise<Product[]> {
    const response = await this.database.findMany({
      include: {
        ncm: true,
      },
    });

    return response.map((product) => {
      return Product.instance({
        height: product.height,
        length: product.length,
        name: product.name,
        ncm: ProductNCM.create({
          code: product.ncm.code,
          cofins: product.ncm.cofins,
          icms: product.ncm.icms,
          ipi: product.ncm.ipi,
          pis: product.ncm.pis,
          tax: product.ncm.tax,
        }),
        id: product.id,
        weight: product.weight,
        width: product.width,
      });
    });
  }

  async remove(id: string): Promise<void> {
    await this.database.delete({
      where: { id },
    });
  }

  static instance() {
    return new ProductDatabaseRepository();
  }
}
