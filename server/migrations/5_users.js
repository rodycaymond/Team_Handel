
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('user_id'); // adds an auto incrementing PK column
        table.string('name')
        table.string('password')
        table.integer('pantry_id') // foreign key reference to id in pantry table
        table.foreign('pantry_id').references('pantry.pantry_id')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
""