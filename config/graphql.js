//graphql configurations
import graphQLServer from '../server'
import schema from '../InquiryAPIs/src/Model/Connector/connector';

const GRAPHQL_PORT = 3000;

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

//graphql server is listening on port 3000
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));