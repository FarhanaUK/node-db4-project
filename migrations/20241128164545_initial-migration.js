/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', table => {
    table.increments()
  })
  .createTable('ingredient', table => {
    table.increments()
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
