import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const httplink = new HttpLink({
  uri: "https://momby.hasura.app/v1/graphql",
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "8QY2QK3zFjssFJdLHCPzqA590Fv9CRXZNQYI8WQBCbZWplPimnUFMT5u91utGGVe",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://momby.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "8QY2QK3zFjssFJdLHCPzqA590Fv9CRXZNQYI8WQBCbZWplPimnUFMT5u91utGGVe",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httplink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
