
exports.seed = function (knex) {
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Baked Tuna Crab Cakes', recipe_ingredients: '2 (12 ounce) cans chunk light tuna in water, 1 cup bread crumbs, 1 zucchini, ½ green bell pepper, ½ onion, ½ cup green onions, 2 cloves garlic, ½ cup nonfat cottage cheese, 2 eggs,', instructions: ' Step 1 Preheat oven to 350 degrees F (175 degrees C). Line a baking sheet with aluminum foil, and spray with cooking spray. Step 2 In a large bowl, thoroughly mix the tuna, bread crumbs, zucchini, green pepper, onion, green onions, garlic, jalapeno pepper, cottage cheese, sour cream, 2 eggs, lime juice, dried basil, pepper, and salt. Step 3 Beat 2 eggs in a shallow bowl, and place the cornmeal on a plate. Step 4 Scoop up about 1/4 cup of the tuna mixture, and gently form it into a compact patty. Dip both sides of each cake into beaten egg and then press into cornmeal, and place the cakes onto the prepared baking sheet. Spray the tops of the cakes with cooking oil spray. Step 5 Bake in the preheated oven until the tops of the cakes are beginning to brown, about 20 minutes. Flip each cake, spray with cooking spray, and bake until the cakes are cooked through and lightly browned, about 20 more minutes.' },
        {
          name: 'Easy Chicken Gyro', recipe_ingredients: '16 ounce container Greek yogurt, 1 cucumber, 1 ½ teaspoons dried dill weed, 2 cloves garlic,  ¼ pounds skinless, boneless chicken breast, ½ head iceberg lettuce, 1 red onion, 1 tomato', instructions: ' Step 1 Place Greek yogurt, cucumber, dill weed, 2 cloves garlic, white vinegar, 1 teaspoon lemon juice, 1 tablespoon olive oil, salt, and black pepper in a blender. Blend until smooth; set aside. Step 2 Whisk together 4 cloves minced garlic, juice of 1 lemon, red wine vinegar, 2 tablespoons olive oil, and oregano in a large glass or ceramic bowl. Season to taste with salt and black pepper. Step 3 Stir in chicken strips and toss to evenly coat.Cover the bowl with plastic wrap and marinate in the refrigerator for 1 hour. Step 4 Preheat the ovens broiler and set the oven rack about 6 inches from the heat source.Step 5 Remove chicken from the marinade and shake off excess.Discard the remaining marinade.Place chicken on a large baking sheet. Step 6 Broil the chicken in the preheated oven until lightly browned and no longer pink in the center, 2 to 4 minutes per side. Step 7 Transfer cooked chicken to a plate and allow to rest for 5 minutes. Step 8 Heat 1 teaspoon olive oil in a large skillet over medium heat; place each pita bread into the skillet until warm and soft, about 2 minutes per pita. Step 9 Serve warmed pita bread topped with chicken strips, yogurt sauce, tomatoes, onion, and lettuce.'}
      ]);
    });
};