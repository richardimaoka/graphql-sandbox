import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const EXCHANGE_RATES = gql`
  query {
    tweets {
      id
      createdAt
      fullText
      favoriteCount
      retweetCount
      replyCount
      user {
        screenName
        profileImageUrl
      }
    }
  }
`;

function App() {
  const a = "Learn react for greater good";

  return (
    <div>
      <ApolloProvider client={client}>
        <header>
          <Child></Child>
        </header>
      </ApolloProvider>
    </div>
  );
}

const Child = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return data.tweets.map(
    ({
      id,
      createdAt,
      user,
      fullText,
      favoriteCount,
      replyCount,
      retWeetCount,
    }) => (
      <div key={id}>
        <div>{user.screenName}</div>
        <div>{createdAt}</div>
        <p>{fullText}</p>
        <p>
          <span>reply: {replyCount}</span>,<span>retweet: {retWeetCount}</span>{" "}
          ,<span>favorite: {favoriteCount}</span>
        </p>
      </div>
    )
  );
};
export default App;
