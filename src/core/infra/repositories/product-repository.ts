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
		const response = await this.database.product.findFirst({
			where: {
				id,
			},
			include: {
				ncm: true,
			},
		});
		await this.database.$disconnect();

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
			tid: response.tid,
			description: response.description,
		});
	}

	async save(product: Product) {
		await this.database.$connect();
		await this.database.product.create({
			data: {
				height: product.height,
				length: product.length,
				weight: product.weight,
				width: product.width,
				id: product.id,
				name: product.name,
				tid: product.tid,
				description: product.description,
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
		await this.database.$disconnect();
	}

	async update(product: Product) {
		await this.database.$connect();
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
					description: product.description,
					name: product.name,
					tid: product.tid,
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
		await this.database.$disconnect();
	}

	async list(): Promise<Product[]> {
		await this.database.$connect();
		const response = await this.database.product.findMany({
			include: {
				ncm: true,
			},
		});

		await this.database.$disconnect();

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
				tid: product.tid,
				description: product.description,
			});
		});
	}

	async remove(id: string): Promise<void> {
		await this.database.$connect();
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
		await this.database.$disconnect();
	}

	static instance() {
		return new ProductDatabaseRepository();
	}
}
