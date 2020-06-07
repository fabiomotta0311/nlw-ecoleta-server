import Knex from 'knex';

export async function up(knex: Knex){
    await knex.schema.createTable('itens', table => {
        table.increments();
        table.string('image').notNullable();
        table.string('title').notNullable();
        table.timestamps();
    });
}

export async function down(knex: Knex){
    await knex.schema.dropTable('itens');
}