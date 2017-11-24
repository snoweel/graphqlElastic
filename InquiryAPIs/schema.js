/**
 * declaring modules
 */
const{
  makeExecutableSchema
} = require('graphql-tools')
const graphql=require('graphql');
const apollo=require('apollo-server-express')
const userSchema = require('./users/Model/Schema/index')
const todoSchema = require('./todo//Model/Schema/index')
// const resolver = require('./users/Model/Resolver/resolver')

// console.dir(resolver);
const typeDefs = `
type User{
userId:String
fname:String
lname:String
email:String
isActive:Boolean
birthDate:String
pinCode:Int
todos:[ToDo]
}
type ToDo{
id:String
text:String
userId:String
done:Boolean
targetDate:String
}

type Query{

#defining find user query
getUserDetails(userId:String): User

# defining find active users query
getActiveUsers : [User]

}

schema {
query: Query
}


`;

const userData = [
{
  userId: "1",
  id: "1",
  fname: "Alex",
  lname: "Galllio",
  email: "dfdgf@hhj.com",
  isActive: true,
  birthDate: "12/12/1990",
  pinCode: 12133
}
];

const toDoData = [
{
  id: "String",
  text: "String",
  userId: "String",
  done: false,
  targetDate: "25-Nov-2017"
}
];
/**
* defining resolver functions
*/
const resolvers = {
Query: {
  getUserDetails: () => userData[0],
  getActiveUsers: () => userData
},
User: {
  todos: () => toDoData
}
};

// const typeDef={userSchema,todoSchema}
const schema = makeExecutableSchema(
{ typeDefs,resolvers});
/**
* exporting schema
*/
module.exports=schema