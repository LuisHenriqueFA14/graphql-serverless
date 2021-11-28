const { ApolloServer } = require('apollo-server-lambda');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { buildSchema } = require('graphql');
const fs = require('fs');
const path = require('path');

const { resolvers } = require('./resolvers');

const typeDefs = buildSchema(fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

module.exports = { server }
