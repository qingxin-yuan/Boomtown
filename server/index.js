const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = require("./api/schema");
const initResolvers = require("./api/resolvers");
const initLoaders = require('./api/loaders');
const config = require("./config");

const app = express();
config(app);


const postgresResource = require("./api/resources/postgresRsource");
const firebaseResource = require("./api/resources/firebaseResource")(app);

postgresResource(app).then(pgResource=>start(pgResource));


const start = (postgresResource)=>{
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: initResolvers({
      postgresResource,
      firebaseResource
  
    })
  });
  
  //CORS middleware
  app.use("*", cors());
  
  /*********TWO MIDDLEWARE*************/
  
  // Where we will send all of our GraphQL requests
  app.use("/graphql", bodyParser.json(), graphqlExpress({ 
    schema,
    context: {loaders: initLoaders({
      postgresResource
    })}
   }));
  
  // A route for accessing the GraphiQL tool
  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql"
    })
  );
  
  app.listen(app.get("PORT"), () => {
    console.log(app.get("PORT"));
    console.log(
      `GraphQL is now running on http://localhost:${app.get("PORT")}/graphql`
    );
  });
}

