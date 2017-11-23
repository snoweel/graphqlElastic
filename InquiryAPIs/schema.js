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
const resolver = require('./users/Model/Resolver/resolver')

const RootQuery = `
type RootQuery {
  getUserDetails(userId: String!): User,
  getActiveUsers: User
}
`;

const SchemaDefinition = `
schema {
  query: RootQuery
}
`;

// const typeDef={userSchema,todoSchema}
const schema = makeExecutableSchema(
  { typeDefs:[SchemaDefinition, RootQuery,userSchema],
    resolver});
console.log((makeExecutableSchema))
/**
 * exporting schema
 */
module.exports=schema