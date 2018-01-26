const fetch = require("node-fetch");

const Items = [
  {
    id: "1",
    imageurl: "www.google.ca",
    title: "cool item",
    description: "cool",
    available: true,
    borrowerid: "1",
    ownerid: "2"
  },
  {
    id: "2",
    imageurl: "www.google.ca",
    title: "cool item 2",
    description: "cool too",
    available: true,
    borrowerid: "2",
    ownerid: "1"
  }
];
const Users = [
  {
    id: "1",
    email: "test@test.com",
    name: "monkey",
    imageurl: "www.google.ca"
  },
  {
    id: "2",
    email: "test2@test.com",
    name: "chimp",
    imageurl: "www.google.ca"
  }
];

const resolveFunctions = {
  Query: {
    items() {
      return fetch("http://localhost:4000/items").then(response =>
        response.json()
      );
    },

    users() {
      return fetch("http://localhost:4000/users").then(response =>
        response.json()
      );
    },
    user(root, { id }) {  //corresponds to id: ID in the schema

      return fetch("http://localhost:4000/users/" + id).then(r => r.json());
    },
    item(root, { id }) {
      return fetch("http://localhost:4000/items/" + id).then(r => r.json());
    }
  },
  Item: {
    itemowner(item) {
      return fetch("http://localhost:4000/users/" + item.itemowner).then(r =>
        r.json()
      );
    },
    borrower(item) {
      if (item.borrower) {
        return fetch("http://localhost:4000/users/" + item.borrower).then(r =>
          r.json()
        );
      } else return null;
    },
    async tags(item) {
      
      const i= await fetch(`http://localhost:4000/items/${item.id}`).then(
        r => r.json()
      )
      return i.tags;
 
    }
  },
  User: {
    shareditems(user) {
      return fetch("http://localhost:4000/items/?itemowner=" + user.id).then(
        response => response.json()
      );
    }
  }
};

module.exports = resolveFunctions;
