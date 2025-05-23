import { FormatFloatNumberHelper } from "@/core/application/helpers/format-float-number-helper";
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
		await this.database.$connect();
		const product = await this.database.$queryRaw<Product>`
			SELECT 
				products.*,
				to_jsonb(ncms) AS ncm
			FROM products
			LEFT JOIN ncms 
			ON products."ncmId" = ncms."id" AND ncms."enable" = true
      WHERE products."enable" = true AND products."id" = '${id}'
		`;

		await this.database.$disconnect();

		if (!product) return null;

		return Product.instance({
			id: product.id,
			tid: product.tid,
			name: product.name,
			description: product.description,
			height: FormatFloatNumberHelper.format(product.height),
			length: FormatFloatNumberHelper.format(product.length),
			weight: FormatFloatNumberHelper.format(product.weight),
			width: FormatFloatNumberHelper.format(product.width),
			ncm: ProductNCM.create({
				code: product.ncm.code,
				cofins: FormatFloatNumberHelper.format(product.ncm.cofins),
				icms: FormatFloatNumberHelper.format(product.ncm.icms),
				id: product.ncm.id,
				ipi: FormatFloatNumberHelper.format(product.ncm.ipi),
				pis: FormatFloatNumberHelper.format(product.ncm.pis),
				tax: FormatFloatNumberHelper.format(product.ncm.tax),
			}),
		});
	}

	async save(product: Product) {
		await this.database.$connect();
		await this.database.product.create({
			data: {
				height: FormatFloatNumberHelper.toPersist(product.height),
				length: FormatFloatNumberHelper.toPersist(product.length),
				weight: FormatFloatNumberHelper.toPersist(product.weight),
				width: FormatFloatNumberHelper.toPersist(product.width),
				id: product.id,
				name: product.name,
				tid: product.tid,
				description: product.description,
				ncmId: product.ncm.id,
				enable: true,
				event: "CREATED",
			},
		});
		await this.database.$disconnect();
	}

	private disable(productId?: string) {
		return this.database.product.update({
			data: {
				enable: false,
			},
			where: {
				productId,
			},
		});
	}

	private async findActive(id: string) {
		return await this.database.product.findFirst({
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

	async update(product: Product) {
		await this.database.$connect();
		const productActive = await this.findActive(product.id);

		if (!productActive) return await this.database.$disconnect();

		await this.database.$transaction([
			this.disable(productActive.productId),
			this.database.product.create({
				data: {
					height: FormatFloatNumberHelper.toPersist(product.height),
					length: FormatFloatNumberHelper.toPersist(product.length),
					weight: FormatFloatNumberHelper.toPersist(product.weight),
					width: FormatFloatNumberHelper.toPersist(product.width),
					id: product.id,
					description: product.description,
					name: product.name,
					tid: product.tid,
					ncmId: product.ncm.id,
					enable: true,
					event: "UPDATED",
				},
			}),
		]);
		await this.database.$disconnect();
	}

	async list(): Promise<Product[]> {
		await this.database.$connect();

		const response = await this.database.$queryRaw<Product[]>`
			SELECT 
				products.*,
				to_jsonb(ncms) AS ncm
			FROM products
			LEFT JOIN ncms 
			ON products."ncmId" = ncms."id" AND ncms."enable" = true
      WHERE products."enable" = true
		`;

		await this.database.$disconnect();

		return response.map((product) =>
			Product.instance({
				id: product.id,
				tid: product.tid,
				name: product.name,
				description: product.description,
				height: FormatFloatNumberHelper.format(product.height),
				length: FormatFloatNumberHelper.format(product.length),
				weight: FormatFloatNumberHelper.format(product.weight),
				width: FormatFloatNumberHelper.format(product.width),
				ncm: ProductNCM.create({
					code: product.ncm.code,
					cofins: FormatFloatNumberHelper.format(product.ncm.cofins),
					icms: FormatFloatNumberHelper.format(product.ncm.icms),
					id: product.ncm.id,
					ipi: FormatFloatNumberHelper.format(product.ncm.ipi),
					pis: FormatFloatNumberHelper.format(product.ncm.pis),
					tax: FormatFloatNumberHelper.format(product.ncm.tax),
				}),
			}),
		);
	}

	async remove(id: string): Promise<void> {
		await this.database.$connect();

		const productActive = await this.findActive(id);

		if (!productActive) return await this.database.$disconnect();

		await this.database.$transaction([
			this.disable(productActive.productId),
			this.database.product.create({
				data: {
					height: FormatFloatNumberHelper.toPersist(productActive.height),
					length: FormatFloatNumberHelper.toPersist(productActive.length),
					weight: FormatFloatNumberHelper.toPersist(productActive.weight),
					width: FormatFloatNumberHelper.toPersist(productActive.width),
					id: productActive.id,
					description: productActive.description,
					name: productActive.name,
					tid: productActive.tid,
					ncmId: productActive.ncmId,
					enable: false,
					event: "DELETED",
				},
			}),
		]);
		await this.database.$disconnect();
	}

	static instance() {
		return new ProductDatabaseRepository();
	}
}
