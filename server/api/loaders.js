const DataLoader = require("dataloader");

module.exports = ({ postgresResource: { getItems, getItem, getTags, getSharedItems, getNumItemsBorrowed} }) => { 
  // console.log(ids);
  return {
    getItems: new DataLoader(ids => Promise.all(ids.map(id => getItems(id)))),
    getItem: new DataLoader(ids => Promise.all(ids.map(id => getItem(id)))),
    getTags: new DataLoader(ids => Promise.all(ids.map(id=>getTags(id)))),
    getSharedItems: new DataLoader(ids => Promise.all(ids.map(id=>getSharedItems(id)))),
    getNumItemsBorrowed: new DataLoader(ids => Promise.all(ids.map(id=>getNumItemsBorrowed(id)))),
  };
};
