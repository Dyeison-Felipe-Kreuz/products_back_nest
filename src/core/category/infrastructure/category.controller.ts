import { Body, Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { CreateCategoryUseCase } from '../application/usecases/create.usecase';
import { CategoryPresenter } from 'src/shared/infrastructure/presenters/category.presenter';
import { CreateCategoryDto } from './dtos/create.dto';
import { FindAllCategoryUseCase } from '../application/usecases/find-all.usecase';
import { UpdateCategoryUseCase } from '../application/usecases/update.usecase';
import { DeleteCategoryUseCase } from '../application/usecases/delete.usecase';
import { UpdateCategoryDto } from './dtos/update.dto';

@Controller('/api/category/v1')
export class CategoryController {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly findAllCategoryUseCase: FindAllCategoryUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}

  @Get()
  async findAll(): Promise<CategoryPresenter[]> {
    return await this.findAllCategoryUseCase.execute();
  }

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryPresenter> {
    return await this.createCategoryUseCase.execute(createCategoryDto);
  }

  @Put()
  async update(
    @Body() updateDto: UpdateCategoryDto,
  ): Promise<CategoryPresenter> {
    return await this.updateCategoryUseCase.execute(updateDto);
  }

  @Delete()
  async delete(@Body('id') id: number): Promise<void> {
    await this.deleteCategoryUseCase.execute({id})
  }
}
