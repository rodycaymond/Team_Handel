
exports.up = function (knex) {
    return knex.schema.createTable('recipes', table => {
        table.increments('recipe_id');
        table.string('recipe_name')
        table.text('recipe_ingredients')
        table.text('instructions')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipes')
};
