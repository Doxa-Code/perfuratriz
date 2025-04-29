import { CreateNCM } from "@/core/application/usecases/create-ncm";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";

test("create ncm", async () => {
  const createNCM = CreateNCM.instance();
  const ncmRepository = NCMDatabaseRepository.instance();

  const list = await ncmRepository.list();
  expect(list.length).toBe(0);

  const ncm = await createNCM.execute({
    code: 1,
    tax: 1,
    icms: 1,
    pis: 1,
    cofins: 1,
    ipi: 1,
  });

  const currentList = await ncmRepository.list();
  expect(currentList.length).toBe(1);

  await ncmRepository.remove(ncm.id);
});
