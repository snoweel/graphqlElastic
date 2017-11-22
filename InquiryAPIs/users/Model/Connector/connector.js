import {
    makeExecutableSchema
  } from 'graphql-tools';
const graphql=require('graphql');
const apollo=require('apollo-server-express')
import resolvers from '../Resolver/resolver';
import typeDef from '../Schema/index';

const schema = makeExecutableSchema({ typeDef,resolvers});
module.exports=schema