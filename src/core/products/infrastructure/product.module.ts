import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductSchema } from "./products.schema";
import { CategoryModule } from "src/core/category/infrastructure/category.module";
import { ProductController } from "./product.controller";
import { ProductRepositoryImpl } from "./product.repository";
import { CreateProductUseCase } from "../application/usecases/create-category.usecase";

@Module({
  imports: [TypeOrmModule.forFeature([ProductSchema]), CategoryModule],
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,
    {
      provide: 'productRepository',
      useClass: ProductRepositoryImpl,
    }
  ],
  exports: ['productRepository']
})

export class ProductModule {}