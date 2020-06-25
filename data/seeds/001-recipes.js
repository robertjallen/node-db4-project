
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'tuna salad', description: 'Tasty Tuna Salad Great For Lunch'},
        {id: 2, name: 'cookies', description: 'Chocolate chip cookies'},
        {id: 3, name: 'brownies', description: 'Fudge Brownies'}
      ]);
    });
};
