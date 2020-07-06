
exports.up = function(knex) {
    return knex.schema.createTable('pokemons', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('weight').notNullable();
        table.decimal('height').notNullable();
        table.string('frontImage').notNullable();
        table.string('backImage').notNullable();
        table.string('type').notNullable();
        table.string('move').notNullable();
        table.string('pokedexNumber').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pokemons');
};
