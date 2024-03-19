"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import React, { ReactNode } from "react";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      console.warn(message, "msg");
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://dashboard.withblaze.app/api/graphql-api" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

// Optional: You can provide a type for the React component that wraps your app with ApolloProvider.
interface AppProps {
  children: ReactNode;
}

export default function LanderPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      {children}
      <html lang="en">
        <body>{children}</body>
      </html>
    </ApolloProvider>
  );
}
