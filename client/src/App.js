import logo from "./logo.svg";
import "./App.css";
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
      time
      content
    }
  }
`;

function App() {
  const a = "Learn react for greater good";

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={() => console.log("clicked")}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {a}
          </a>
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

  return data.tweets.map(({ id, time, content }) => (
    <div key={id}>
      <div>{time}</div>
      <p>{content}</p>
    </div>
  ));
};
export default App;
