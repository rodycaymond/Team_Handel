
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      const exp = new Date().toISOString().slice(0, 10)
      const notExp = `2021-08-27`

      return knex('ingredients').insert([
        {name: 'asparagus', amount: 6.0, amount_unit: 'ounces', perishable: true, expiration: exp},
        {name: 'banana', amount: 3.0, amount_unit: ' ', perishable: true, expiration: notExp},
        {name: 'oreo', amount: 1.0, amount_unit: 'box', perishable: true, expiration: notExp},
        {name: 'flour', amount: 40.0, amount_unit: 'cups', perishable: false, expiration: notExp},
        {name: 'yogurt', amount: 4.0, amount_unit: 'cups', perishable: true, expiration: exp},
        {name: 'chicken', amount: 2.5, amount_unit: 'pounds', perishable: true, expiration: notExp},
        {name: 'apple', amount: 8, amount_unit: 'count', perishable: true, expiration: exp},
        {name: 'ground beef', amount: 3.0, amount_unit: 'pounds', perishable: true, expiration: exp},
        {name: 'eggs', amount: 24, amount_unit: 'count', perishable: true, expiration: notExp},
        {name: 'milk', amount: 2, amount_unit: 'gallons', perishable: true, expiration: exp},
      ]);
    });
};
