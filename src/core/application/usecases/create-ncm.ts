import { NCM } from "@/core/domain/entities/ncm";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";

interface NCMRepository {
  save(ncm: NCM): Promise<void>;
}

export class CreateNCM {
  constructor(private readonly ncmRepository: NCMRepository) {}

  async execute(input: InputDTO) {
    const ncm = NCM.create(input);
    await this.ncmRepository.save(ncm);
    return ncm;
  }

  static instance() {
    return new CreateNCM(NCMDatabaseRepository.instance());
  }
}

type InputDTO = {
  code: number;
  tax: number;
  icms: number;
  pis: number;
  cofins: number;
  ipi: number;
};
