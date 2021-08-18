
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pantry').del()
    .then(function () {
      // Inserts seed entries
      return knex('pantry').insert([
        {name: 'bobs pantry'},
        {name: 'alices pantry'}
      ]);
    });
};
