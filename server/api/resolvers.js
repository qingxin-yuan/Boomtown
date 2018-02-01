const fetch = require("node-fetch");

module.exports = ({
  // jsonResource: { getSharedItems, getNumItemsBorrowed, getUser, getusers },
  // postgresResource: {getTags},
  firebaseResource: {getUser, getUsers}
}) => {
  return {
    Query: {
      items(root, args, context) {
        // console.log(args);
        return context.loaders.getItems.load(args);
      },

      users() {
        return getUsers();
      },
      user(root, {id}) {
        //corresponds to id: ID in the schema

        return getUser(id);
      },
      item(root, { id }, context) {
        return context.loaders.getItem.load(id);
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

      tags({id}, args, context) {
      
        return context.loaders.getTags.load(id);
    
      }
    },
    User: {
      shareditems({id}, args, context) {
        return context.loaders.getSharedItems.load(id);
      },
      async numborrowed({id}, args, context) {
        const i = await context.loaders.getNumItemsBorrowed.load(id);
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
};

// module.exports = resolveFunctions;
