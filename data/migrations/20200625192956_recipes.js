
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', tbl => {
    // creates a primary key called id
    tbl.increments("id");
    // creates a text field called name which is both required and unique
    tbl.text('name').unique().notNull();
    // creates a numeric field called budget which is required
    tbl.text('description').notNull();
  });

  await knex.schema.createTable('steps', tbl => {
    //foriegn key
    tbl
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("SET NULL")

    tbl.integer("step_number")
    tbl.text("instructions")
    //manuallly setting primary key
    tbl.primary(["recipe_id"])  
  })


  await knex.schema.createTable('ingredients', tbl => {
    tbl.increments("id");
    tbl.text("name")
  })


  await knex.schema.createTable('recipe_ingredients', tbl => {
    tbl.integer("recipe_id")
    .references("id")
    .inTable("recipes")

    tbl.integer("ingredient_id")
    .references("id")
    .inTable("ingredients")

    tbl.float("quantity")

    tbl.primary(["recipe_id", "ingredient_id"])

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipe_ingredients');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('steps');
  await knex.schema.dropTableIfExists('recipes');
};
