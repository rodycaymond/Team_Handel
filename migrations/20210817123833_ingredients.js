
exports.up = function (knex) {
    return knex.schema.createTable('ingredients', table => {
        table.increments('ingredient_id');
        table.string('name')
        table.boolean('perishable')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('ingredients')
};
