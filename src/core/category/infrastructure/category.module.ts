import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategorySchema } from "./category.schema";
import { CategoryController } from "./category.controller";
import { CategoryRepositoryImpl } from "./category.repository";
import { CreateCategoryUseCase } from "../application/usecases/create.usecase";
import { FindAllCategoryUseCase } from "../application/usecases/find-all.usecase";
import { UpdateCategoryUseCase } from "../application/usecases/update.usecase";
import { DeleteCategoryUseCase } from "../application/usecases/delete.usecase";

@Module({
  imports: [TypeOrmModule.forFeature([CategorySchema])],
  controllers: [CategoryController],
  providers: [
    FindAllCategoryUseCase,
    CreateCategoryUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
    {
      provide: 'categoryRepository',
      useClass: CategoryRepositoryImpl
    },
  ],
  exports: ['categoryRepository']
})
export class CategoryModule {}