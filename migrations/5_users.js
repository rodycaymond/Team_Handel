
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('user_id'); // adds an auto incrementing PK column
        table.integer('pantry_id') // foreign key reference to id in pantry table
        table.foreign('pantry_id').references('pantry.pantry_id')
        table.integer('recipe_id')
        table.foreign('recipe_id').references('recipes.recipe_id') // foreign key reference to id in recipe table
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
""