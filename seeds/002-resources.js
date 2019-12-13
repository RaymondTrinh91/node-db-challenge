
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Car", description: "vroom vroom"},
        {name: "Tacobell Fire Sauce", description: "It's fire"},
        {name: "Wallet"},
        {name: "vsCode" },
        {name: "Wake me up", description: "I can't wake up"},
      ]);
    });
};
