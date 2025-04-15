import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CategorySchema } from 'src/core/category/infrastructure/category.schema';
import { ProductSchema } from 'src/core/products/infrastructure/products.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'products',
      entities: [CategorySchema, ProductSchema],
      synchronize: false,
      migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
      migrationsRun: true,
    }),
  ],
})
export class DatabaseModule {}
