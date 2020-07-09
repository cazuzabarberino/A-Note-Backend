import knex from "knex";
import dotenv from "dotenv";
const config = require("./knexfile");

dotenv.config();

const connection = knex(config["development"]);

export default connection;
