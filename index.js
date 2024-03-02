const express = require("express")
const graphqlHTTP= require("express-graphql")
const app = express();

app.listen(8000,function(){
    console.log("http://localhost:8000")
})