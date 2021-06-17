const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const axios = require('axios').default;

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/twitter.gql"), "utf8")}
`;

const resolvers = {
  // ...other resolver definitions...
};

const promise = new Promise((resolve) => {
  resolve(42);
});
promise.then((value) => {
  console.log(value);
}).catch((error) => {
  console.error(error);
});
console.log("aaabbbddddddwddd")
const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: false,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
