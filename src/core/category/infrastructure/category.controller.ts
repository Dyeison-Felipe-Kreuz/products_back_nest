import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryUseCase } from '../application/usecases/create.usecase';
import { CategoryPresenter } from 'src/shared/infrastructure/presenters/category.presenter';
import { CreateCategoryDto } from './dtos/create.dto';

@Controller('/api/category/v1')
export class CategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryPresenter> {
    return await this.createCategoryUseCase.execute(createCategoryDto);
  }
}
