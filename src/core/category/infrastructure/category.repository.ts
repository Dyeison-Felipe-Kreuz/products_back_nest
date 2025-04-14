import { InjectRepository } from "@nestjs/typeorm";
import { CategoryRepository } from "../domain/category.repository";
import { CategorySchema } from "./category.schema";
import { Repository } from "typeorm";
import { Category } from "../domain/category.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(@InjectRepository(CategorySchema)
    private readonly categoryRepository: Repository<CategorySchema>) {}
  async create(catetory: Category): Promise<Category> {
    return await this.categoryRepository.save(catetory);
  }
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }
  async update(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }
  async delete(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}