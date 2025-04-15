import { ProductsOutput } from "src/shared/application/output/products.output";
import { UseCase } from "src/shared/application/utils/execute";
import { ProductRepository } from "../../domain/product.repository";
import { Inject, NotFoundException } from "@nestjs/common";
import { CategoryRepository } from "src/core/category/domain/category.repository";
import { Product } from "../../domain/product.entity";

type Input = {
    name: string;
    price: string;
    description: string;
    categoryId: number
}

type Output = ProductsOutput

export class CreateProductUseCase implements UseCase<Input, Output> {
  constructor(
    @Inject('productRepository')
    private readonly productRepository: ProductRepository,
    @Inject('categoryRepository')
        private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute(input: Input): Promise<Output> {
    const category = await this.categoryRepository.findById(
      input.categoryId
    );

    if(!category) {
      throw new NotFoundException(
        `Category id ${input.categoryId} not found`,
      );
    }

    const product = Product.createProduct({
      name: input.name,
      price: input.price,
      description: input.description,
      category: category,
    })

    const create = await this.productRepository.create(product);

    const output: Output = {
      id: create.id!,
      name: create.name,
      price: create.price,
      description: create.description,
      category: {
        id: create.category.id!,
        name: create.category.name!
      },
    }

    return output;

  }
}