const db = require('../data/dbConfig')


function find(){
 return db("recipes")
}

function getShoppingList(ID){
  return db("recipes as r")
    .where("r.id",  ID)
    .join("recipe_ingredients as ri", "ri.recipe_id", "r.id")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .select("r.name as recipe name", "i.name as ingredient name", "ri.quantity")
}

module.exports = {
  find,
  getShoppingList,
}