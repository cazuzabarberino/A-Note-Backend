import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("anote_user", (table) => {
    table.string("id").primary();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("anote_user");
}
