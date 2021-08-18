
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', table => {
        table.increments('ingredient_id');
        table.string('name')
        table.decimal('amount', 8, 2)
        table.string('amount_unit')
        table.boolean('perishable')
        table.date('expiration')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredients')
};
