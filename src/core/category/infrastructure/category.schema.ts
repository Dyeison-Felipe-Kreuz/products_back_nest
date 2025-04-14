import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class CategorySchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
