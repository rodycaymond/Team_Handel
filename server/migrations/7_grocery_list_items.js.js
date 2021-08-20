
exports.up = function(knex) {
    return knex.schema.createTable('grocery_list_items', table => {
        table.increments('grocery_list_item_id')
        table.integer('ingredient_id')
        table.foreign('ingredient_id').references('ingredient_id')
        table.decimal('amount')
        table.string('amount_units')
        table.boolean('checked')
    })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('grocery_list_items')
};
