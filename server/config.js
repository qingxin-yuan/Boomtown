module.exports = app =>{

  //POSTGRES Configs
  app.set('PGUSER', 'boomtowndb');
  app.set('PGPASSWORD', 'boomtowndb');
  app.set('PGDATABASE', 'boomtowndb');
  app.set('PGHOST', 'localhost');
  app.set('PGPORT', '5432');
  app.set('PGCONNECTION',process.env.DATABASE_URL);

  //Express Configs
  app.set('PORT', process.env.PORT || '5000');

  //FIREBASE CONFIG
  app.set('FIREBASE_CONFIG', {
    apiKey: 'AIzaSyB13ZA3zZ5EI_rY_FU7Ad1SLfRSLSb0PaE',
    authDomain: 'boomtown-b0c6a.firebaseapp.com',
    databaseURL: 'https://boomtown-b0c6a.firebaseio.com',
    projectId: 'boomtown-b0c6a',
    storageBucket: 'boomtown-b0c6a.appspot.com',
    messagingSenderId: '191615605005'
});
}

