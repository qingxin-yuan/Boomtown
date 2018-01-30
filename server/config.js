module.exports = app =>{

  //POSTGRES Configs
  app.set('PGUSER', process.env.PGUSER || 'boomtowndb');
  app.set('PGPASSWORD', process.env.PGPASSWORD || 'boomtowndb');
  app.set('PGDATABASE', process.env.PGDATABASE || 'boomtowndb');
  app.set('PGHOST', process.env.PGHOST || 'localhost');
  app.set('PG_PORT', process.env.PG_PORT || '5432');
   //graphQL Configs
  app.set('GQL_PORT', process.env.GQL_PORT || '3002');
  //Express Configs
  app.set('PORT', process.env.PORT || '3000');
  //Temperary JSON server
  app.set('JSON_PORT', '4000');
}

