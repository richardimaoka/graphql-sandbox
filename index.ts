const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const axios = require('axios').default;

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/twitter.gql"), "utf8")}
`;

const resolvers = {
  // ...other resolver definitions...
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  mockEntireSchema: true,
});

const a = 1
const b = 3

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
