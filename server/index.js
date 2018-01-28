const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const schema = require("./api/schema");

const app = express();

const GQL_PORT = process.env.PORT; // POST# is defined in the command line



//CORS middleware
app.use("*", cors());

/*********TWO MIDDLEWARE*************/ 
// Where we will send all of our GraphQL requests
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// A route for accessing the GraphiQL tool
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);




app.listen(GQL_PORT, () =>
  console.log(`GraphQL is now running on http://localhost:${GQL_PORT}/graphql`)
);
