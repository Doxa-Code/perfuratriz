import { NCM } from "@/core/domain/entities/ncm";
import { PrismaClient } from "../../../../prisma";

interface NCMRepository {
  save(ncm: NCM): Promise<void>;
  list(): Promise<NCM[]>;
}

export class NCMMemoryRepository implements NCMRepository {
  private static database: Map<string, NCM> = new Map();

  async list() {
    return Array.from(NCMMemoryRepository.database.values());
  }

  async save(ncm: NCM): Promise<void> {
    NCMMemoryRepository.database.set(ncm.id, ncm);
  }

  static instance() {
    return new NCMMemoryRepository();
  }
}

export class NCMDatabaseRepository implements NCMRepository {
  private database = new PrismaClient().nCM;

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
