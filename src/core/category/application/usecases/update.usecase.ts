import { CategoryOutput } from "src/shared/application/output/category.output";
import { UseCase } from "src/shared/application/utils/execute";
import { CategoryRepository } from "../../domain/category.repository";
import { Inject, NotFoundException } from "@nestjs/common";

type Input = {
  id: number;
  name: string;
};

type Output = CategoryOutput;

export class UpdateCategoryUseCase implements UseCase<Input, Output> {
  constructor(
    @Inject('categoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute({ id, name }: Input): Promise<Output> {
    const existCategory = await this.categoryRepository.findById(id);

    if (!existCategory) {
      throw new NotFoundException(`category id ${id} not found`);
    }

    existCategory.name = name;

    const update = await this.categoryRepository.update(existCategory);

    const output: CategoryOutput = {
      id: update.id!,
      name: update.name!,
    };

    return output;
  }
}