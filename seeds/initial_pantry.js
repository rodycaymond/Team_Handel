
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pantry').del()
    .then(function () {
      return knex('pantry').insert([
        {ingredient_id: 21},
      ]);
    });
};


