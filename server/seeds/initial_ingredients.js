
exports.seed = function(knex) {
  return knex('ingredients').del()
  .then(function() {
    // Inserts seed entries

    return knex('ingredients').insert([
      {name: 'asparagus', perishable: true},
      {name: 'banana', perishable: true,},
      {name: 'oreo', perishable: true},
      {name: 'flour', perishable: false},
      {name: 'yogurt', perishable: true},
      {name: 'chicken', perishable: true},
      {name: 'apple', perishable: true},
      {name: 'ground beef', perishable: true},
      {name: 'eggs', perishable: true},
      {name: 'milk', perishable: true},
      {name: 'goose eggs', perishable: true},
      {name: 'duck butter', perishable: true},
      {name: 'artichokes', perishable: true},
      {name: 'coke zero', perishable: false},
      {name: 'artisanal mayonnaise', perishable: true},
      {name: 'calaxian crystals', perishable: false}
    ]);
  });
};
