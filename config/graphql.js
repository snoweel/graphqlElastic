// //graphql configurations
// const graphQLServer = require('../server')
// var schema = require('../InquiryAPIs/schema');
// // const GRAPHQL_PORT = 3000;
// import { apolloServer } from 'graphql-tools';
// // graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// // graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


// graphQLServer.use('/graphql', apolloServer({
//   graphiql: true,
//   pretty: true,
//   schema: Schema
//   // resolvers: Resolvers,
//   //mocks: Mocks,
// }));
// //graphql server is listening on port 3000
// // graphQLServer.listen(GRAPHQL_PORT, () => console.log(
// //   `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
// // ));