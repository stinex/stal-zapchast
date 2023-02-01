import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.ENDPOINT,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }
  });
}