const fetch = require("node-fetch");


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
