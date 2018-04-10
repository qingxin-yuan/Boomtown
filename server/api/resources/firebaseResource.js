const firebase = require("firebase");

module.exports = app => {

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(app.get("FIREBASE_CONFIG"));
  const db = firebaseApp.database();

  return {
    async getUsers() {
    
          let users = await db.ref('users').once('value');
          users = users.val();
          const usersList = [];
          Object.keys(users).forEach(userid=>{
            usersList.push({
              id: userid,
              email: users[userid].email,
              fullname: users[userid].fullname,
              bio: users[userid].bio,
              imageurl: '',
            })
          })
          return usersList;
         
  
    },
    async getUser(userid) {
      let user = await db.ref(`users/${userid}`).once('value');
      user = user.val();
      return {
        id: userid,
        ...user
      }
      
    }
  };
};
