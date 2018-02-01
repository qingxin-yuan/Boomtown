const firebase = require("firebase");
require("firebase/auth"); // inline require

module.exports = app => {
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(app.get("FIREBASE_CONFIG"));
  const db = firebaseApp.database();
  const firebaseAuth = firebase.auth();

  return {
    async getUsers() {
    
          let users = await db.ref('users').once('value');
          users = users.val();
        // console.log(users);
          const usersList = [];
          Object.keys(users).forEach(userid=>{
            // console.log(userid);
            usersList.push({
              id: userid,
              email: users[userid].email,
              fullname: users[userid].fullname,
              bio: users[userid].bio,
              imageurl: '',
            })
          })
          // console.log(usersList);
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
