import { Product } from "@/core/domain/entities/product";
import { ProductNCM } from "@/core/domain/value-objects/product-ncm";
import { PrismaClient } from "../../../../prisma";

interface ProductRepository {
  save(product: Product): Promise<void>;
  remove(id: string): Promise<void>;
  list(): Promise<Product[]>;
  retrieve(id: string): Promise<Product | null>;
}

export class ProductDatabaseRepository implements ProductRepository {
  private database = new PrismaClient();

  async retrieve(id: string) {
    const response = await this.database.product.findFirst({
      where: {
        id,
      },
      include: {
        ncm: true,
      },
    });
    if (!response) return null;
    return Product.instance({
      height: response.height,
      id: response.id,
      length: response.length,
      name: response.name,
      ncm: ProductNCM.create({
        ...response.ncm,
        id: response.ncm.ncmId,
      }),
      weight: response.weight,
      width: response.width,
    });
  }

  async save(product: Product) {
    await this.database.product.create({
      data: {
        height: product.height,
        length: product.length,
        weight: product.weight,
        width: product.width,
        id: product.id,
        name: product.name,
        ncm: {
          create: {
            ncmId: product.ncm.id,
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

  async update(product: Product) {
    const productsNCM = await this.database.productNCM.findMany({
      where: {
        product: {
          id: product.id,
        },
      },
      select: {
        id: true,
      },
    });
    await this.database.$transaction([
      this.database.product.update({
        data: {
          height: product.height,
          length: product.length,
          weight: product.weight,
          width: product.width,
          id: product.id,
          name: product.name,
          ncm: {
            create: {
              ncmId: product.ncm.id,
              code: product.ncm.code,
              cofins: product.ncm.cofins,
              icms: product.ncm.icms,
              ipi: product.ncm.ipi,
              pis: product.ncm.pis,
              tax: product.ncm.tax,
            },
          },
        },
        where: {
          id: product.id,
        },
      }),
      this.database.productNCM.deleteMany({
        where: {
          id: {
            in: productsNCM.map((p) => p.id),
          },
        },
      }),
    ]);
  }

  async list(): Promise<Product[]> {
    const response = await this.database.product.findMany({
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
          ...product.ncm,
          id: product.ncm.ncmId,
        }),
        id: product.id,
        weight: product.weight,
        width: product.width,
      });
    });
  }

  async remove(id: string): Promise<void> {
    const productsNCM = await this.database.productNCM.findMany({
      where: {
        product: {
          id,
        },
      },
      select: {
        id: true,
      },
    });
    await this.database.$transaction([
      this.database.product.delete({
        where: { id },
      }),
      this.database.productNCM.deleteMany({
        where: {
          id: {
            in: productsNCM.map((p) => p.id),
          },
        },
      }),
    ]);
  }

  static instance() {
    return new ProductDatabaseRepository();
  }
}
