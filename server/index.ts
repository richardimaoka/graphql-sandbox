const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const axios = require('axios').default;

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/twitter.gql"), "utf8")}
`;

const resolvers = {
  Query: {
    tweets(parent, args, context, info) {
      return context.tweets.data
    }
  },
  Tweet: {

  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  mockEntireSchema: false,
  context: async () => ({
    tweets: await axios.get('http://localhost:3000/tweets')
  }) 
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});