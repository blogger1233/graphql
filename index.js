const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema.js"); // Change this line
const app = express();

app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(8000, () => {
  console.log("Server is running at http://localhost:8000/graphql");
});
