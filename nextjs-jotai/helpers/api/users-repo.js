const fs = require("fs");

// users in JSON file for simplicity, store in a db for production applications
let users = require("../data/users.json");

export const usersRepo = {
  create,
  find: (x) => users.find(x),
};

function create(user) {
  // generate new user username
  user.username = users.length
    ? Math.max(...users.map((x) => x.username)) + 1
    : 1;

  // set date created and updated
  user.dateCreated = new Date().toISOString();
  user.dateUpdated = new Date().toISOString();

  // add and save user
  users.push(user);
  saveData();
}

function saveData() {
  fs.writeFileSync("../data/users.json", JSON.stringify(users, null, 4));
}
