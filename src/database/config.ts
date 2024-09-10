import { DataSource } from "typeorm";
import dotenv from "dotenv";
import * as models from "../models";
dotenv.config();

const pool: DataSource = new DataSource({
  type: "postgres",
  username: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT_DATABASE as string, 10),
  entities: Object.values(models),
  synchronize: true,
  logging: true,
});

export default pool;
