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

app.get('/users', (req, res) => {
    knex.select('*')
    .from('users')
    .then(data => res.status(200).json(data))
})

app.post('/createuser/', (req, res) => {
  knex.insert({ name: req.body.name })
  .then(data => {res.status(200).json(data)})
  .catch(err => res.status(500))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});