const DataLoader = require("dataloader");

module.exports = ({ postgresResource: { getItems, getItem} }) => { 
  // console.log(ids);
  return {
    getItems: new DataLoader(ids => Promise.all(ids.map(id => getItems(id)))),
    getItem: new DataLoader(ids => Promise.all(ids.map(id => getItem(id)))),
    // getTags: new DataLoader(ids => Promise.all(ids.map(id=>getTags(id))))
  };
};
