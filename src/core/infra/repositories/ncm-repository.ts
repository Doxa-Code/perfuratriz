import { NCM } from "@/core/domain/entities/ncm";
import { PrismaClient } from "../../../../prisma";

interface NCMRepository {
  save(ncm: NCM): Promise<void>;
  list(): Promise<NCM[]>;
  retrieve(id: string): Promise<NCM | null>;
}

export class NCMDatabaseRepository implements NCMRepository {
  private database = new PrismaClient().nCM;

  async retrieve(id: string) {
    const response = await this.database.findFirst({
      where: {
        id,
      },
    });

    if (!response) return null;

    return NCM.instance({
      code: response.code,
      cofins: response.cofins,
      icms: response.icms,
      id: response.id,
      ipi: response.ipi,
      pis: response.pis,
      tax: response.tax,
    });
  }

  async list() {
    const response = await this.database.findMany();
    return response.map(NCM.instance);
  }

  async remove(id: string) {
    await this.database.delete({
      where: { id },
    });
  }

  async save(ncm: NCM): Promise<void> {
    await this.database.create({
      data: {
        code: ncm.code,
        cofins: ncm.cofins,
        icms: ncm.icms,
        ipi: ncm.ipi,
        pis: ncm.pis,
        tax: ncm.tax,
        id: ncm.id,
      },
    });
  }

  static instance() {
    return new NCMDatabaseRepository();
  }
}
