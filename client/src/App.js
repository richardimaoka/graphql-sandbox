import logo from "./logo.svg";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { useEffect, useContext } from "react";
import React from "react";
const ThemeContext = React.createContext();
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

// const client = ...

function App() {
  const a = "Learn react for greater good";
  useEffect(() => {
    client
      .query({
        query: gql`
          query GetRates {
            rates(currency: "USD") {
              currency
            }
          }
        `,
      })
      .then((result) => console.log(result));
  });

  return (
    <div className="App">
      <ThemeContext.Provider value="valueA">
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
      </ThemeContext.Provider>
    </div>
  );
}

const Child = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return <div>child</div>;
};
export default App;
