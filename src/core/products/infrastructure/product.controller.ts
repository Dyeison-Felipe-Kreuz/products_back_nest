import { Body, Controller, Post } from "@nestjs/common";
import { CreateProductUseCase } from "../application/usecases/create-category.usecase";
import { ProductPresenter } from "src/shared/infrastructure/presenters/product.presenter";
import { CreateProductDto } from "./dtos/create.dto";

@Controller('/api/product/v1')
export class ProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductPresenter> {
    return await this.createProductUseCase.execute(createProductDto);
  }
}