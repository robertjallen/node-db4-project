const express = require('express');
const RecipeRouter = require('./router/recipes')

const server = express();

server.use(express.json());
server.use(RecipeRouter);

server.get('/', (req, res) => {
  res.send('recipes on deck...')
})

module.exports = server;