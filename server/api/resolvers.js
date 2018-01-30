const fetch = require("node-fetch");

module.exports = app => {

const ITEMS_URL = `http://localhost:${app.get('JSON_PORT')}/items`;
const USERS_URL = `http://localhost:${app.get('JSON_PORT')}/users`;


return {
  Query: {
    items() {
      return fetch(ITEMS_URL).then(response =>
        response.json()
      );

    },

    users() {
      return fetch(USERS_URL).then(response =>
        response.json()
      );
    },
    user(root, { id }) {
      //corresponds to id: ID in the schema

      return fetch(`${USERS_URL}/${id}`).then(r => r.json());
    },
    item(root, { id }) {
      return fetch(`${ITEMS_URL}/${id}`).then(r => r.json());
    }
  },
  Item: {
    itemowner(item) {
      return fetch(`${USERS_URL}/${item.itemowner}`).then(r =>
        r.json()
      );
    },
    borrower(item) {
      if (item.borrower) {
        return fetch(`${USERS_URL}/${item.borrower}`).then(r =>
          r.json()
        );
      } else return null;
    },

    async tags(item) {
      const i = await fetch(`${ITEMS_URL}/${item.id}`).then(r =>
        r.json()
      );
      return i.tags;
    }
  },
  User: {
    shareditems(user) {
      return fetch(`${ITEMS_URL}/?itemowner=${user.id}`).then(
        response => response.json()
      );
    },
    async numborrowed(user) {
      const i = await fetch(
        `${ITEMS_URL}/?borrower=${user.id}`
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
}








// module.exports = resolveFunctions;
