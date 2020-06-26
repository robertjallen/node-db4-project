
exports.seed = async function(knex) {
	await knex("steps").insert([   
    { step_number: 1, instructions: 'step1 recipe 1 ', recipe_id: 1},
    { step_number: 2, instructions: 'step2 reipe 1 ', recipe_id: 1},
    { step_number: 1, instructions: 'step1 reipe 2 ', recipe_id: 2},
    {step_number: 2, instructions: 'step2 reipe 2 ', recipe_id: 2},
    { step_number: 1, instructions: 'step1 reipe 3 ', recipe_id: 3},
    {step_number: 2, instructions: 'step2 reipe 3 ', recipe_id: 3}
	])
}
