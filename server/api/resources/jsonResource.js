const fetch  = require('node-fetch');

module.exports = app => {

  const ITEMS_URL = `http://localhost:${app.get('JSON_PORT')}/items`;
  const USERS_URL = `http://localhost:${app.get('JSON_PORT')}/users`;


  return {
    getSharedItems(id){
      return fetch(`${ITEMS_URL}/?itemowner=${id}`).then(
        response => response.json()
      );
    },
    getItems(){
      return fetch(ITEMS_URL).then(response =>
        response.json()
      );
    },
    getUsers(){
      return fetch(USERS_URL).then(response =>
        response.json()
      );
    },
    getUser(id){
      return fetch(`${USERS_URL}/${id}`).then(response =>
        response.json()
      );
    },
    getItem(id){
      return fetch(`${ITEMS_URL}/${id}`).then(response =>
        response.json()
      );
    }
  }
}