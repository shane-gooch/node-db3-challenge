const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

//SELECT schemes.id, schemes.scheme_name, steps.step_number, steps.instructions
//FROM steps JOIN schemes
//ON steps.scheme_id = schemes.id
//WHERE schemes.id = 1
//ORDER BY steps.step_number;

function findSteps(id) {
  return db("steps")
    .select(
      "schemes.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .innerJoin("schemes", "steps.scheme_id", "=", "schemes.id")
    .where({ scheme_id: id })
    .orderBy("steps.step_number");
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
