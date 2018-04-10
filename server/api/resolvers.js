const fetch = require("node-fetch");

module.exports = ({
  // jsonResource: { getSharedItems, getNumItemsBorrowed, getUser, getusers },
  postgresResource: {createItem, getTags},
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
      tags(){
        return getTags();
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
      
        return context.loaders.getItemTags.load(id);
    
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

      createNewItem(root, {newItem}) {
        console.log(newItem);

        return createItem(newItem);

        //must return new item type, thanks to the mutation schema
      },
      // updateItem(root, { newItem: { id, borrower: { fullname, email } } }) {
      //   console.log(email);
      //   return { fullname, email };
      // }
    }
  };
};

