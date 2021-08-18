
exports.up = function(knex) {
    return knex.schema.createTable('pantry', table => {
        table.increments('pantry_id');
        table.integer('pantry_ingredients_id') //making space for the FK with the table.integer
        table.foreign('pantry_ingredients_id').references('pantry_ingredients.pantry_ingredients_id') //populating with the FK from the other table with the foreign.references
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pantry')
};
