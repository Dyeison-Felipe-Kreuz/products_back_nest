import { Inject } from "@nestjs/common";
import { CategoryOutput } from "src/shared/application/output/category.output";
import { UseCase } from "src/shared/application/utils/execute";
import { CategoryRepository } from "../../domain/category.repository";
import { Category } from "../../domain/category.entity";

type Input = {
  name: string;
}

type Output = CategoryOutput;

export class CreateCategoryUseCase implements UseCase<Input, Output> {
  constructor(@Inject('categoryRepository') private readonly categoryRepository: CategoryRepository) {}

  async execute({ name }: Input): Promise<Output> {

    const entity = new Category

    entity.name = name

    const create = await this.categoryRepository.create(entity)

    const categoryOutput: CategoryOutput = {
      id: create.id!,
      name: create.name!,
    }

    return categoryOutput;
  }
}