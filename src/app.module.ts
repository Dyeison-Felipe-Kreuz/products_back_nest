import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/infrastructure/database/database.module';
import { CategoryModule } from './core/category/infrastructure/category.module';

@Module({
  imports: [DatabaseModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
