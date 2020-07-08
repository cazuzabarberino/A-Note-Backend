import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable("anote_user", (table) => {
    table.string("id").primary();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable("anote_user");
}
