const {Client} = require('pg');




module.exports = async app => {

  const client = new Client({
    user: app.get('PGUSER'),
    host:app.get('PGHOST'),
    database: app.get('PGDATABASE'),
    password: app.get('PGPASSWORD'),
    port: app.get('PGPORT'),
  });

  await client.connect();

  // client.query('SELECT * FROM items', (err, res) => {
  //           // resolve(res.rows);
  //           console.log(err, res);
  //           // client.end();
             
  //          });



  return {
    getItems(){
      return new Promise((resolve, reject)=>{
        client.query('SELECT * FROM items', (err, res) => {
          resolve(res.rows);
          // client.end();
           
         });
      })
    },
 
    getItem(id){
      return new Promise((resolve, reject)=>{
        client.query('SELECT * FROM items WHERE id = $1',[id],  (err, res) => {
          resolve(res.rows);
          // client.end();
           
         });
      })
    },
  //   getTags(itemid){
  //     return new Promise((resolve, reject)=>{
  //       client.query('SELECT * FROM tags WHERE id = $1',[id],  (err, res) => {
  //         resolve(res.rows);
  //         // client.end();
           
  //        });
  //     })
  //   },
  getTags(itemid) {
    console.log("get tags....");
    return new Promise((resolve, reject) => {
      client.query(
        `SELECT * FROM tags 
        INNER JOIN itemtags ON itemtags.tagid = tags.id
        WHERE itemtags.itemid=$1`,
        [itemid],
        (err, data) => {
          // console.log(data);
          resolve(data.rows);
        }
      );
    });
  },
  //   createItem(id){
  //     return;
  //   },
  //   updateItem(id){
  //     return;
  //   }

  // }
  };}