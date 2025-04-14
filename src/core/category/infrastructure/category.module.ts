import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategorySchema } from "./category.schema";
import { CategoryController } from "./category.controller";
import { CategoryRepositoryImpl } from "./category.repository";
import { CreateCategoryUseCase } from "../application/usecases/create.usecase";

@Module({
  imports: [TypeOrmModule.forFeature([CategorySchema])],
  controllers: [CategoryController],
  providers: [
    CreateCategoryUseCase,
    {
      provide: 'categoryRepository',
      useClass: CategoryRepositoryImpl
    },
  ],
  exports: ['categoryRepository']
})
export class CategoryModule {}