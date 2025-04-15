import { CategoryOutput } from "src/shared/application/output/category.output";
import { UseCase } from "src/shared/application/utils/execute";
import { CategoryRepository } from "../../domain/category.repository";
import { Inject } from "@nestjs/common";

type Input = void;

type Output = CategoryOutput[];

export class FindAllCategoryUseCase implements UseCase<Input, Output> {
  constructor(
    @Inject('categoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute(input: Input): Promise<Output> {
    const category = await this.categoryRepository.findAll();

    const output: CategoryOutput[] = category.map((category) => ({
      id: category.id!,
      name: category.name!,
    }));

    return output;
  }
}