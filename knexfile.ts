// Update with your config settings.
import dotenv from "dotenv";
import path from "path";

dotenv.config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      tableName: "anote_migrations",
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },
};
