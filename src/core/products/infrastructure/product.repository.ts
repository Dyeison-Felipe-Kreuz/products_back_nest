import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductSchema } from "./products.schema";
import { Repository } from "typeorm";
import { ProductRepository } from "../domain/product.repository";
import { Product } from "../domain/product.entity";

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor (@InjectRepository(ProductSchema) private readonly productRepository: Repository<ProductSchema>) {}

  async create(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }


}