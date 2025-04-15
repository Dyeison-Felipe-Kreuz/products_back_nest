import { CategorySchema } from "src/core/category/infrastructure/category.schema";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class ProductSchema {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  description: string;

  @ManyToOne(() => CategorySchema, category => category.product)
  @JoinColumn()
  category: CategorySchema

}