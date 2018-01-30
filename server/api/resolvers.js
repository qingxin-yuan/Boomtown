const fetch = require("node-fetch");

module.exports = ({
  jsonResource: { getSharedItems, getItems, getItem, getUser, getusers }
}) => {
  return {
    Query: {
      items() {
        return getItems();
      },

      users() {
        return getUsers();
      },
      user(root, { id }) {
        //corresponds to id: ID in the schema

        return getUser(id);
      },
      item(root, { id }) {
        return getItem(id);
      }
    },
    Item: {
      itemowner(item) {
        return getUser(item.itemowner);
      },
      borrower(item) {
        if (item.borrower) {
          return getUser(item.borrower);
        } else return null;
      },

      async tags(item) {
        const i = await getItem(item.id);
        return i.tags;
      }
    },
    User: {
      shareditems(user) {
        return getItems(user.id);
      },
      // async numborrowed(user) {
      //   const i = await fetch(`${ITEMS_URL}/?borrower=${user.id}`).then(r =>
      //     r.json()
      //   );
      //   return i.length;
      // }
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
};

// module.exports = resolveFunctions;
