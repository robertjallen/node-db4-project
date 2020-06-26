
exports.seed = async function(knex) {
	await knex("recipe_ingredients").insert([   
    { recipe_id: 1, ingedient_id: 1, quantity: .5},
    { recipe_id: 2, ingedient_id: 2, quantity: 2},
    { recipe_id: 3, ingedient_id: 3, quantity: 2}
	])
}
