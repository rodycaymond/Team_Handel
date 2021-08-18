
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pantry_ingredients').del()
    .then(function () {
      // Inserts seed entries
      const exp = new Date().toISOString().slice(0, 10)
      const notExp = `2021-08-27`

      return knex('pantry_ingredients').insert([
        {ingredient_id: 1, amount: 6.0, amount_unit: 'ounces', expiration: exp},
        {ingredient_id: 2, amount: 3.0, amount_unit: ' ', expiration: notExp},
        {ingredient_id: 3, amount: 1.0, amount_unit: 'box', expiration: notExp},
        {ingredient_id: 4, amount: 40.0, amount_unit: 'cups', expiration: notExp},
        {ingredient_id: 5, amount: 4.0, amount_unit: 'cups', expiration: exp},
        {ingredient_id: 6, amount: 2.5, amount_unit: 'pounds', expiration: notExp},
        {ingredient_id: 7, amount: 8, amount_unit: 'count', expiration: exp},
        {ingredient_id: 8, amount: 3.0, amount_unit: 'pounds', expiration: exp},
        {ingredient_id: 9, amount: 24, amount_unit: 'count', expiration: notExp},
        {ingredient_id: 10, amount: 2, amount_unit: 'gallons', expiration: exp}
      ]);
    });
};
