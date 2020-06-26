
exports.seed = async function(knex) {
	await knex("recipes").insert([   
    { name: 'tuna salad', description: 'Tasty Tuna Salad Great For Lunch'},
    { name: 'cookies', description: 'Chocolate chip cookies'},
    { name: 'brownies', description: 'Fudge Brownies'}
	])
}
