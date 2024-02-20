import "reflect-metadata";
import '../../Configs/dotenv'
import { DataSource } from "typeorm";
import { Notifications } from "../../Entities/notification";
import { UserNotifications } from "../../Entities/user_notification";
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from "../../Configs/dotenv/env_vars";
const AppDataSource = new DataSource({
  type: "postgres",
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  host: DATABASE_HOST,
  synchronize: false,
  logging: false,
  entities: [Notifications, UserNotifications],
  migrations: [`${__dirname}/**/Migrations/*.{ts,js}`],
  ssl:{
    rejectUnauthorized: false
  }
});
export { AppDataSource };
