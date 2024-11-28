/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', table => {
    table.increments('recipe_id')
    table.string('recipe_name', 200).notNullable().unique()                                                                                                                 
  })
  .createTable('ingredient', table => {
    table.increments('ingredient_id')
    table.string('ingredient_name', 200).notNullable().unique()   
    table.string('ingredient_unit', 50)
  })
  .createTable('steps', table => {
    table.increments()
  })
  .createTable('step_ingredient', table => {
    table.increments()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('step_ingredient')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('recipes')
};
