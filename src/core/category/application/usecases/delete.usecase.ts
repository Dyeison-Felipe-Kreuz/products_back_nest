import { CategoryOutput } from "src/shared/application/output/category.output";
import { UseCase } from "src/shared/application/utils/execute";
import { CategoryRepository } from "../../domain/category.repository";
import { Inject, NotFoundException } from "@nestjs/common";

type Input = {id:number};

type Output = void;

export class DeleteCategoryUseCase implements UseCase<Input, Output> {
  constructor(
    @Inject('categoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute({ id }: Input): Promise<Output> {
    const existCategory = await this.categoryRepository.findById(id);

    if (!existCategory) {
      throw new NotFoundException(`category id ${id} not found`);
    }

    await this.categoryRepository.delete(id);
  }
}