exports.seed = function (knex) {
    return knex('grocery_list_items').del()
      .then(function () {
  
        return knex('grocery_list_items').insert([
          { ingredient_id: 11, amount: 1.0, amount_units: 'dozen', checked: false }, //1
          { ingredient_id: 12, amount: 5.0, amount_units: 'ounces', checked: false },  //2
          { ingredient_id: 13, amount: 2.0, amount_units: 'hearts', checked: false },    //3
          { ingredient_id: 14, amount: 12.0, amount_units: 'cans', checked: false },     //4
          { ingredient_id: 15, amount: 12.0, amount_units: 'ounces', checked: false },   //5
          { ingredient_id: 16, amount: 4.0, amount_units: 'ounces', checked: false }    //6

        ]);
      });
  };