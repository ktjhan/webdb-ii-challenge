
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Cars").insert([
        {
          Make: "Toyota",
          Model: "Camry",
          Mileage: 100,
          Vin: 10,
          Status: 1,
          Transmission: "v6"
        },
        {
          Make: "BMW",
          Model: "M3",
          Mileage: 200,
          Vin: 20,
          Status: 0,
          Transmission: "v6"
        },
        {
          Make: "Audi",
          Model: "A8",
          Mileage: 300,
          Vin: 30,
          Status: 1,
          Transmission: "v6"
        }
      ]);
    });
};
