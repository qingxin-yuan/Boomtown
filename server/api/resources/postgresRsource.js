const { Client } = require("pg");

module.exports = async app => {
  const client = new Client({
    user: app.get("PGUSER"),
    host: app.get("PGHOST"),
    database: app.get("PGDATABASE"),
    password: app.get("PGPASSWORD"),
    port: app.get("PGPORT")
  });

  await client.connect();

  return {
    getSharedItems(userid) {
      return new Promise((resolve, reject) => {
        client.query(
          "SELECT * FROM items WHERE itemowner = $1",
          [userid],
          (err, data) => {
            resolve(data.rows);
          }
        );
      });
    },
    getItems() {
      return new Promise((resolve, reject) => {
        client.query("SELECT * FROM items", (err, res) => {
          resolve(res.rows);
          // client.end();
        });
      });
    },

    getItem(id) {
      return new Promise((resolve, reject) => {
        client.query("SELECT * FROM items WHERE id = $1", [id], (err, res) => {
          resolve(res.rows);
          // client.end();
        });
      });
    },
    getNumItemsBorrowed(userid) {
      return new Promise((resolve, reject) => {
        client.query(
          "SELECT * FROM items WHERE borrower = $1",
          [userid],
          (err, data) => {
            resolve(data.rows);
          }
        );
      });
    },

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
    async createItem({ title, description, imageurl, itemowner, tags }) {
      const itemValues = [title, description, imageurl, itemowner];

      tags = tags.map(t => t.id);
      // console.log(tags);
      const itemInsertQuery = `INSERT INTO items(title, description, imageurl, itemowner) VALUES($1, $2, $3, $4) RETURNING *`;

      // const result = await client.query(text, values);
      // try{
      //   const result = (async () =>{
      try {
        await client.query("BEGIN");
        const itemResult = await client.query(itemInsertQuery, itemValues);

        console.log(tq(tags));
        const tagsInsertQuery = `INSERT INTO itemtags(itemid, tagid) VALUES ${tq(
          tags
        )}`;

        await client.query(tagsInsertQuery, [itemResult.rows[0].id, ...tags]);

        await client.query("COMMIT");

        return itemResult.rows[0];
      } catch (e) {
        await client.query("ROLLBACK");
        throw e;
      }
      // });
      // }
      // catch(e){
      //   console.log(e);
      // }
    },
    updateItem(id) {
      return;
    }
  };
};

const tq = tags => tags.map((tag, index) => `($1, $${index + 2})`).join(", ");

// const generateTagsInsert = (id, tags) =>{
//   let result = [];
//   tags.forEach((tag,index)=>{
//     result.push(`($1, $${index+2})`);
//   // console.log(result)
//   });
//      return result.join(', ');
// };
