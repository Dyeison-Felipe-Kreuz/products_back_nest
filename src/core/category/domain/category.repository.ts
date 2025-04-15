import { Category } from "./category.entity";

export interface CategoryRepository {
  create(catetory: Category): Promise<Category>;
  findAll(): Promise<Category[]>;
  update(category: Category): Promise<Category>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Category>;
}