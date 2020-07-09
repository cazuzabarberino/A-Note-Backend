// Update with your config settings.
import dotenv from "dotenv";
import path from "path";

require("dotenv").config({ path: path.resolve(__dirname, "..", "..", ".env") });

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: "anote_migrations",
      directory: path.resolve(__dirname, "migrations"),
    },
  },
};
