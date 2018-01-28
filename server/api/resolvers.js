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
    user(root, { id }) {
      //corresponds to id: ID in the schema

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
      const i = await fetch(`http://localhost:4000/items/${item.id}`).then(r =>
        r.json()
      );
      return i.tags;
    }
  },
  User: {
    shareditems(user) {
      return fetch("http://localhost:4000/items/?itemowner=" + user.id).then(
        response => response.json()
      );
    },
    async numborrowed(user) {
      const i = await fetch(
        `http://localhost:4000/items/?borrower=${user.id}`
      ).then(r => r.json());
      return i.length;
    }
  },
  Mutation: {
    // addItem(root, payload){

    addItem(root, { newItem: { title } }) {
      // console.log(payload.newItem.title);
      //TO DO: save the new item in database
      // return {title: payload.newItem.title};
      return { title };

      //must return new item type, thanks to the mutation schema
    },
    updateItem(root, { newItem: { id, borrower: { fullname, email } } }) {
      console.log(email);
      return { fullname, email };
    }
  }
};



module.exports = resolveFunctions;
