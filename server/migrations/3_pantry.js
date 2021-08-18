
exports.up = function(knex) {
    return knex.schema.createTable('pantry', table => {
        table.increments('pantry_id')
        table.string('name')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pantry')
};
