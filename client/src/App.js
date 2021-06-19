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
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
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

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
};
export default App;
