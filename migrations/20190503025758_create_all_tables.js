
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
        tbl.increments();

        tbl
            .string('name', 255)
            .notNullable()
            .unique();
    })
    .createTable('recipes', tbl => {
        tbl.increments();

        tbl
            .string('name', 255)
            .notNullable()
            .unique();

        tbl
            .string('instructions')
            .notNullable();

        tbl
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl
            .string('name', 255)
            .notNullable()
            .unique();
        
        tbl
            .float('quantity')
            .notNullable()
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();

        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cohorts')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        
        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

    })
    
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('dishes');
};
