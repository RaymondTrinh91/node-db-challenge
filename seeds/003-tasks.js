
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "Drive to Tacobell", notes: "Don't crash", completed: 0, project_id: 1},
        {description: "Buy Chalupa", notes: "Yummy", completed: 0, project_id: 1},
        {description: "No more Syntax errors", notes: "Please", completed: 1, project_id: 2},
        {description: "Save me from the nothing I've become", notes: "Save Me", completed: 0, project_id: 3}
      ]);
    });
};
