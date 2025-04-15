import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/infrastructure/database/database.module';
import { CategoryModule } from './core/category/infrastructure/category.module';
import { ProductModule } from './core/products/infrastructure/product.module';

@Module({
  imports: [DatabaseModule, CategoryModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
