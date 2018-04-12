module.exports = app =>{

  //POSTGRES Configs
  // app.set('PGUSER', process.env.DATABASE_URL['user'] || 'boomtowndb');
  // app.set('PGPASSWORD', process.env.DATABASE_URL['pass'] || 'boomtowndb');
  // app.set('PGDATABASE', process.env.DATABASE_URL['path'] || 'boomtowndb');
  // app.set('PGHOST', process.env.DATABASE_URL['host'] || 'localhost');
  // app.set('PG_PORT', process.env.DATABASE_URL['port'] || '5432');
  app.set('PGCONNECTION',process.env.DATABASE_URL);
  //  //graphQL Configs
  // app.set('GQL_PORT', process.env.GQL_PORT || '3002');
  //Express Configs
  app.set('PORT', process.env.PORT || '3002');

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

