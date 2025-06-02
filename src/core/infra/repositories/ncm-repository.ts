import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
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
		const ncm = await this.database.nCM.findFirst({
			where: {
				AND: [
					{
						id,
					},
					{
						enable: true,
					},
				],
			},
		});

		await this.database.$disconnect();

		if (!ncm) return null;

		return NCM.instance({
			id: ncm.id,
			code: ncm.code,
			cofins: FormatFloatNumberHelper.format(ncm.cofins),
			icms: FormatFloatNumberHelper.format(ncm.icms),
			ipi: FormatFloatNumberHelper.format(ncm.ipi),
			pis: FormatFloatNumberHelper.format(ncm.pis),
			tax: FormatFloatNumberHelper.format(ncm.tax),
		});
	}

	async list() {
		await this.database.$connect();
		const response = await this.database.nCM.findMany({
			where: {
				enable: true,
			},
		});
		await this.database.$disconnect();
		return response.map((ncm) =>
			NCM.instance({
				id: ncm.id,
				code: ncm.code,
				cofins: FormatFloatNumberHelper.format(ncm.cofins),
				icms: FormatFloatNumberHelper.format(ncm.icms),
				ipi: FormatFloatNumberHelper.format(ncm.ipi),
				pis: FormatFloatNumberHelper.format(ncm.pis),
				tax: FormatFloatNumberHelper.format(ncm.tax),
			}),
		);
	}

	private disable(ncmId?: string) {
		return this.database.nCM.update({
			data: {
				enable: false,
			},
			where: {
				ncmId,
			},
		});
	}

	private async findActive(id: string) {
		return await this.database.nCM.findFirst({
			where: {
				AND: [
					{
						id,
					},
					{
						enable: true,
					},
				],
			},
		});
	}

	async remove(id: string) {
		await this.database.$connect();

		const ncmActive = await this.findActive(id);

		if (!ncmActive) {
			await this.database.$disconnect();
			return;
		}

		await this.database.$transaction([
			this.disable(ncmActive?.ncmId),
			this.database.nCM.create({
				data: {
					code: ncmActive.code,
					cofins: ncmActive.cofins,
					icms: ncmActive.icms,
					ipi: ncmActive.ipi,
					pis: ncmActive.pis,
					tax: ncmActive.tax,
					enable: false,
					id: ncmActive.id,
					event: "DELETED",
				},
			}),
		]);

		await this.database.$disconnect();
	}

	async save(ncm: NCM): Promise<void> {
		await this.database.$connect();
		await this.database.nCM.create({
			data: {
				id: ncm.id,
				code: ncm.code,
				cofins: FormatFloatNumberHelper.toPersist(ncm.cofins),
				icms: FormatFloatNumberHelper.toPersist(ncm.icms),
				ipi: FormatFloatNumberHelper.toPersist(ncm.ipi),
				pis: FormatFloatNumberHelper.toPersist(ncm.pis),
				tax: FormatFloatNumberHelper.toPersist(ncm.tax),
				enable: true,
				event: "CREATED",
			},
		});
		await this.database.$disconnect();
	}

	async update(ncm: NCM): Promise<void> {
		await this.database.$connect();

		const ncmActive = await this.findActive(ncm.id);

		await this.database.$transaction([
			this.disable(ncmActive?.ncmId),
			this.database.nCM.create({
				data: {
					id: ncm.id,
					code: ncm.code,
					cofins: FormatFloatNumberHelper.toPersist(ncm.cofins),
					icms: FormatFloatNumberHelper.toPersist(ncm.icms),
					ipi: FormatFloatNumberHelper.toPersist(ncm.ipi),
					pis: FormatFloatNumberHelper.toPersist(ncm.pis),
					tax: FormatFloatNumberHelper.toPersist(ncm.tax),
					enable: true,
					event: "UPDATED",
				},
			}),
		]);

		await this.database.$disconnect();
	}

	static instance() {
		return new NCMDatabaseRepository();
	}
}
