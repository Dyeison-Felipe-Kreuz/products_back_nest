import { ProductSchema } from 'src/core/products/infrastructure/products.schema';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class CategorySchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ProductSchema, product  => product.category)
  product: ProductSchema[];
}
