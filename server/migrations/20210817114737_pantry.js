
exports.up = function(knex) {
    return knex.schema.createTable('pantry', table => {
        table.increments('pantry_id');
        table.integer('ingredient_id') //making space for the FK with the table.integer
        table.foreign('ingredient_id').references('ingredients.ingredient_id') //populating with the FK from the other table with the foreign.references
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
