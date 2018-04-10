const DataLoader = require("dataloader");

module.exports = ({ postgresResource: { getItems, getItem, getItemTags, getSharedItems, getNumItemsBorrowed} }) => { 
  return {
    getItems: new DataLoader(ids => Promise.all(ids.map(id => getItems(id)))),
    getItem: new DataLoader(ids => Promise.all(ids.map(id => getItem(id)))),
    getItemTags: new DataLoader(ids => Promise.all(ids.map(id=>getItemTags(id)))),
    getSharedItems: new DataLoader(ids => Promise.all(ids.map(id=>getSharedItems(id)))),
    getNumItemsBorrowed: new DataLoader(ids => Promise.all(ids.map(id=>getNumItemsBorrowed(id)))),
  };
};
