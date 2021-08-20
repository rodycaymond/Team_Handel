
exports.up = function(knex) {
    return knex.schema.createTable('users_grocery_list', table => {
        table.increments('users_grocery_list_entry_id')
        table.integer('user_id')
        table.foreign('user_id').references('users.user_id')
        table.integer('grocery_list_item_id')
        table.foreign('grocery_list_item_id').references('grocery_list_items.grocery_list_item_id')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_grocery_list')
};
