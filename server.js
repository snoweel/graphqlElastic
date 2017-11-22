/**
 * Module dependencies.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan=require('morgan');
var db=require('./config/database')
//graphql configurations
import schema from '../InquiryAPIs/src/Model/Connector/connector';
const GRAPHQL_PORT = 3000;
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('dev'))

try{
  await(db.connectToES())
  //listening at port PORT
  app.listen(8000, function() {
    console.log("Server listening at 8000")
  });
}
catch(error){
  console.log("Can't establish connection");
  console.log(error)
}

//graphql server is listening on port 3000
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));

module.exports=app