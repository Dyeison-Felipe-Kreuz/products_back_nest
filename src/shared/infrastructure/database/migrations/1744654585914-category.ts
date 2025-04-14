import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Category1744654585914 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const isTableExists = await queryRunner.hasTable('category');

    if (!isTableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'category',
          columns: [
            {
              name: 'id',
              type: 'int',
              isGenerated: true,
              isPrimary: true,
              generationStrategy: 'increment',
            },
            {
              name: 'name',
              type: 'varchar',
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
