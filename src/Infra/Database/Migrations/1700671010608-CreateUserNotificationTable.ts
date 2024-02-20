import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserNotificationTable1700671010608
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_notifications",
        columns: [
          {
            name: "_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "first_name",
            type: "varchar(100)",
            isNullable: true,
          },
          {
            name: "last_name",
            type: "varchar(100)",
            isNullable: true,
          },
          {
            name: "dealership_name",
            type: "varchar(100)",
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "user_id",
            type: 'varchar(50)',
            isNullable: false,
          },
          {
            name: "notification_id",
            type: 'uuid',
            isNullable: false,
          },
          {
            name: "created_at",
            type: "TIMESTAMPTZ",
            default: "NOW()",
            isNullable: false,
          },
          {
            name: "updated_at",
            type: "TIMESTAMPTZ",
            isNullable: true,
          },
          {
            name: "deleted_at",
            type: "TIMESTAMPTZ",
            isNullable: true,
          },
        ],
        foreignKeys:[
          {
            columnNames:['notification_id'],
            referencedColumnNames:['_id'],
            referencedTableName:'notifications'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_notifications");
  }
}
