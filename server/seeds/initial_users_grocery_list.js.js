
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_grocery_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_grocery_list').insert([
        {user_id: 1, grocery_list_item_id: 1},
        {user_id: 1, grocery_list_item_id: 2},
        {user_id: 1, grocery_list_item_id: 3},
        {user_id: 1, grocery_list_item_id: 4},
        {user_id: 1, grocery_list_item_id: 5},
        {user_id: 1, grocery_list_item_id: 6},
        {user_id: 2, grocery_list_item_id: 1},
        {user_id: 2, grocery_list_item_id: 2},
        {user_id: 2, grocery_list_item_id: 3},
        {user_id: 2, grocery_list_item_id: 4},
        {user_id: 2, grocery_list_item_id: 5},
        {user_id: 2, grocery_list_item_id: 6}
      ]);
    });
};
