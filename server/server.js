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

// make a new user
app.post('/createuser/', (req, res) => {
  knex('users').insert({ name: req.body.name })
    .then(data => { res.status(200).json(data) })
    .catch(err => res.status(500))
})

// add a pantry - needs to be sent an object with a user_id and pantry name 
app.post('/addpantry/', (req, res) => {
  knex('pantry').insert({ name: req.body.name })
  const latestPantry = knex('pantry').max('pantry_id')
  knex('user').where({ user_id: req.body.user_id }).update({ pantry_id: latestPantry })
    .then(data => { res.status(200)})
    .catch(err => { res.status(500) })
})

// add an ingredient - needs to be sent and object with a name and perishable bool 
app.post('/ingredient', (req, res) => {
  knex('ingredients')
    .insert({name: req.body.name, perishable: req.body.perishable})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500))
})

// get all of a users ingredients in their pantry
app.get('/pantry/:pantry_id', (req, res) => {
  knex
    .select('*').from('pantry_ingredients').where({pantry_id: req.params.pantry_id})
    .join('ingredients', 'ingredients.ingredient_id', '=', 'pantry_ingredients.ingredient_id')
    .then(data => res.send(data, 200))
    .catch(err => { res.status(500) })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});