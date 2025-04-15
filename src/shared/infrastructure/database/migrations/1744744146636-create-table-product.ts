import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableProduct1744744146636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const isTableExists = await queryRunner.hasTable('product');

    if (!isTableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'product',
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
            {
              name: 'price',
              type: 'varchar',
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'categoryId',
              type: 'int',
            },
          ],
          foreignKeys: [
            {
              referencedColumnNames: ['id'],
              referencedTableName: 'category',
              columnNames: ['categoryId'],
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
