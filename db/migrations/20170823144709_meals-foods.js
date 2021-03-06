exports.up = function(knex, Promise) {
    let createQuery = `CREATE TABLE meals_foods(
      id SERIAL PRIMARY KEY NOT NULL,
      meal_id INTEGER REFERENCES meals(id),
      food_id INTEGER REFERENCES foods(id),
  created_at TIMESTAMP
)`;
    return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE meals_foods`;
    return knex.raw(dropQuery);
};