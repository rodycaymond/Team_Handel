
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'bob', pantry_id: 1, recipe_id: 1},
        { name: 'alice', pantry_id: 2, recipe_id: 2},
      ]);
    });
};
