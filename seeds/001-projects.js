
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Go to Tacobell", description: "It's lunch time",completed: 1},
        {name: "Finish this project", completed: 0},
        {name: "Wake me up, inside", description: "can't wake up", completed: 0}
      ]);
    });
};
