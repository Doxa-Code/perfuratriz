import type { NCM } from "@/core/domain/entities/ncm";
import { Product } from "@/core/domain/entities/product";
import { NotFound } from "@/core/domain/errors/not-found";
import { NCMDatabaseRepository } from "@/core/infra/repositories/ncm-repository";
import { ProductDatabaseRepository } from "@/core/infra/repositories/product-repository";

interface ProductRepository {
	save(product: Product): Promise<void>;
}

interface NCMRepository {
	retrieve(id: string): Promise<NCM | null>;
}

export class CreateProduct {
	constructor(
		private readonly productRepository: ProductRepository,
		private readonly ncmRepository: NCMRepository,
	) {}

	async execute(input: InputDTO) {
		const ncm = await this.ncmRepository.retrieve(input.ncm);

		if (!ncm) throw new NotFound("ncm");

		const product = Product.create({
			height: input.height,
			length: input.length,
			name: input.name,
			ncm,
			weight: input.weight,
			width: input.width,
			tid: input.tid,
			description: input.description,
		});

		await this.productRepository.save(product);

		return product;
	}

	static instance() {
		return new CreateProduct(
			ProductDatabaseRepository.instance(),
			NCMDatabaseRepository.instance(),
		);
	}
}

type InputDTO = {
	name: string;
	ncm: string;
	weight: number;
	length: number;
	height: number;
	width: number;
	tid: string;
	description: string;
};
