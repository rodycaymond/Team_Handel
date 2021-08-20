const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'admin',
    password: 'password',
    database: 'postgres'
  }
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// get users
app.get('/users', (req, res) => {
  knex.select('*')
    .from('users')
    .then(data => res.status(200).json(data))
})

// make a new user - needs an object with a user name and password
app.post('/createuser/', async (req, res) => {
  try {
    await knex('users')
      .insert({ name: req.body.name, password: req.body.password })
    await knex('pantry')
      .insert({ name: req.body.name })
    const latestPantry = await knex('pantry').max('pantry_id')
    await knex('users').where({ name: req.body.name }).update({ pantry_id: latestPantry[0].max })
    res.send(200)
  }
  catch (err) { res.send(err) }
})

// get the pantry for a specified user id - needs a username or user id
app.get('/login', (req, res) => {
  knex('users').select('*').where({ name: req.query.name }).andWhere({ password: req.query.password })
    .then(data => { res.send(data, 200) })
    .catch(err => { res.send(404) })
})

// add a pantry - needs to be sent an object with a user_id and pantry name 
app.post('/addpantry/', (req, res) => {
  knex('pantry').insert({ name: req.body.name })
    .then(() => {
      const latestPantry = knex('pantry').max('pantry_id')
      knex('user').where({ user_id: req.body.user_id }).update({ pantry_id: latestPantry })
        .then(data => { res.status(200) })
        .catch(err => { res.status(500) })
    })
})

// add an ingredient - needs to be sent and object with a name and perishable bool 
app.post('/ingredient', (req, res) => {
  knex('ingredients')
    .insert({ name: req.body.name, perishable: req.body.perishable })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500))
})

// get all of a users ingredients in their pantry - needs a path variable of pantry id
app.get('/pantry/:pantry_id', (req, res) => {
  knex
    .select('*').from('pantry_ingredients').where({ pantry_id: req.params.pantry_id })
    .join('ingredients', 'ingredients.ingredient_id', '=', 'pantry_ingredients.ingredient_id')
    .then(data => res.send(data, 200))
    .catch(err => { res.status(500) })
})

// add an ingredient to a specific pantry - needs an object with name, perishable, amount, amount units, and expiration
app.post('/pantry/:pantry_id/addingredient', async (req, res) => {
  try {
    //create ingredient first, need key for FK inputted into pantry ingredients     
    await knex('ingredients').insert({
      name: req.body.name,
      perishable: req.body.perishable
    })
    const lastIngred = await knex('ingredients').max('ingredient_id')
    await knex('pantry_ingredients').insert({
      ingredient_id: lastIngred[0].max,
      pantry_id: req.params.pantry_id,
      amount: req.body.amount,
      amount_unit: req.body.amount_unit,
      expiration: "2021-08-27"
    })
    res.send(200)
  }
  catch {
    res.send(400)
  }
})

// delete a pantry ingredient -> send as query param i.e.: http://localhost:8080/pantry?pantry_id=2&pantry_ingredients_id=6
app.delete('/pantry/', async (req, res) => {
  try {
    await knex('pantry_ingredients').where({ pantry_id: req.query.pantry_id })
      .andWhere({ pantry_ingredients_id: req.query.pantry_ingredients_id }).del()
    res.send(200)
  }
  catch (err) {
    console.log(err)
    res.send(400)
  }
})

//get all recipes
app.get('/recipes/all', (req, res) => {
  knex('recipes').select('*')
    .then((data) => { res.send(data, 200) })
    .catch((err) => { res.send(err, 400) })
})

//get recipes by user - needs a request body with a user_id
app.get('/recipes/:user_id', (req, res) => {
  knex('recipe_id').from('users_recipes').where({ user_id: req.params.user_id })
    .join('recipes', 'recipes.recipe_id', '=', 'users_recipes.recipe_id')
    .then((data) => { res.send(data, 200) })
    .catch((err) => { res.send(err, 400) })
})

// add a recipe as a user - needs a request body with a user_id, as well as complete recipe object
app.post('/recipes/add', async (req, res) => {
  try {
    await knex('recipes').insert({
      recipe_name: req.body.recipe_name,
      recipe_ingredients: req.body.recipe_ingredients,
      instructions: req.body.instructions
    })
    const lastRecipe = await knex('recipes').max('recipe_id')
    await knex('users_recipes').insert({
      user_id: req.body.user_id,
      recipe_id: lastRecipe[0].max
    })
    res.send(200)
  }
  catch (err) {
    res.send(err, 400)
  }
})

// delete a recipe
app.delete('/recipes/delete/:recipe_id', async (req, res) => {
  try {
    await knex('users_recipes').where({ recipe_id: req.params.recipe_id }).del()
    res.send(200)
  }
  catch (err) {
    res.send(err, 400)
  }
})

// get grocery list items by user_id - requires user_id in url
app.get('/grocerylist/:user_id', (req, res) => {
  knex('grocery_list_item_id').from('users_grocery_list').where({ user_id: req.params.user_id })
    .join('grocery_list_items', 'grocery_list_items.grocery_list_item_id', '=', 'users_grocery_list.grocery_list_item_id')
    .join('ingredients', 'ingredients.ingredient_id', '=', 'grocery_list_items.ingredient_id')
    .then((data) => res.send(data, 200))
    .catch((err) => res.send(err, 400))
})

// add a grocery list item as a user - requires an object with:
// {
//   user_id: req.body.user_id
//   name: req.body.name
//   perishable: req.body.perishable
//   amount: req.body.amount
//   amount_units: req.body.amount_units
// }

app.post('/grocerylist/add', async (req, res) => {
  try {
    await knex('ingredients').insert({
      name: req.body.name, perishable: req.body.perishable
    })
    const lastIngred = await knex('ingredients').max('ingredient_id')
    await knex('grocery_list_items').insert({
      ingredient_id: lastIngred[0].max, //TODO: need to add logic to check if ingredient has been entered before, to avoid duplicates on ingredient table
      amount: req.body.amount,
      amount_units: req.body.units,
      checked: false
    })
    const lastGrocItem = await knex('grocery_list_items').max('grocery_list_item_id')
    await knex('users_grocery_list').insert({
      user_id: req.body.user_id,
      grocery_list_item_id: lastGrocItem[0].max
    })
    res.send(200)
  }
  catch (err) {
    res.send(err, 400)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});