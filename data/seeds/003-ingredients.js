
exports.seed = async function(knex) {
	await knex("ingredients").insert([   
    { name: 'pickels '},
    { name: 'tuna '},
    { name: 'chocolate chips '}
	])
}
