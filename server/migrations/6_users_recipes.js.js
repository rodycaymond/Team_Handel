
exports.up = function(knex) {
  return knex.schema.createTable('users_recipes', table => {
      table.increments('users_recipes_id')
      table.integer('user_id')
      table.foreign('user_id').references('users.user_id')
      table.integer('recipe_id')
      table.foreign('recipe_id').references('recipes.recipe_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
