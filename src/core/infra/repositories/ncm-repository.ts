import { NCM } from "@/core/domain/entities/ncm";
import { PrismaClient } from "../../../../prisma";

interface NCMRepository {
  save(ncm: NCM): Promise<void>;
  list(): Promise<NCM[]>;
  retrieve(id: string): Promise<NCM | null>;
  update(ncm: NCM): Promise<void>;
}

export class NCMDatabaseRepository implements NCMRepository {
  private database = new PrismaClient();

  async retrieve(id: string) {
    await this.database.$connect();
    const response = await this.database.nCM.findFirst({
      where: {
        id,
      },
    });
    await this.database.$disconnect();

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
    await this.database.$connect();
    const response = await this.database.nCM.findMany();
    await this.database.$disconnect();
    return response.map(NCM.instance);
  }

  async remove(id: string) {
    await this.database.$connect();
    await this.database.nCM.delete({
      where: { id },
    });
    await this.database.$disconnect();
  }

  async save(ncm: NCM): Promise<void> {
    await this.database.$connect();
    await this.database.nCM.create({
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
    await this.database.$disconnect();
  }

  async update(ncm: NCM): Promise<void> {
    await this.database.$connect();
    await this.database.nCM.update({
      data: {
        code: ncm.code,
        cofins: ncm.cofins,
        icms: ncm.icms,
        ipi: ncm.ipi,
        pis: ncm.pis,
        tax: ncm.tax,
      },
      where: {
        id: ncm.id,
      },
    });
    await this.database.$disconnect();
  }

  static instance() {
    return new NCMDatabaseRepository();
  }
}
