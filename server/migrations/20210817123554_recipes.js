
exports.up = function (knex) {
    return knex.schema.createTable('recipes', table => {
        table.increments('recipe_id');
        table.integer('ingredient_id')
        table.foreign('ingredient_id').references('ingredients.ingredient_id')
        table.string('instructions')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipes')
};
