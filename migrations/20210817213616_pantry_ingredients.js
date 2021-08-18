
exports.up = function (knex) {
    return knex.schema.createTable('pantry_ingredients', table => {
        table.increments('pantry_ingredients_id')
        table.integer('ingredient_id')
        table.foreign('ingredient_id').references('ingredients')
        table.decimal('amount',4, 2)
        table.string('amount_unit')
        table.date('expiration')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('pantry_ingredients')
};
