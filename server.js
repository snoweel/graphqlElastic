/**
 * Module dependencies.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan=require('morgan');
var db=require('./config/database')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('dev'))

try{
  db.connectToES().then(
     //listening at port PORT
  app.listen(8000, function() {
    console.log("Server listening at 8000")
  })
  )
}
catch(error){
  console.log("Can't establish connection");
  console.log(error)
}

var schema = require('./InquiryAPIs/schema');

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


module.exports=app