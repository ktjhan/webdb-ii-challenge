exports.up = function(knex) {
  // REMEMBER THE return
  return knex.schema.createTable("Cars", tbl => {
    // id column, integer, primary key, auto-increment
    tbl.increments();

    tbl.string("Make", 255).index();

    tbl.string("Model", 255).index();

    tbl.integer("Mileage");

    tbl.integer("Vin");

    tbl.boolean("Status").defaultTo(false);

    tbl.string("Transmission").index();
    // most RDBMS store 1 for true and 0 for false

    // // adds created_at and updated_at columns
    // tbl.timestamps(true, true);
  });
};

// undo the changes from the up function (rollback)
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Cars");
};

