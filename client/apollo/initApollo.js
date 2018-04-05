import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import './polyfill';

let apolloClient = null;

const create = initialState => new ApolloClient({
  connectToDevTools: process.browser,
  ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  cache: new InMemoryCache().restore(initialState || {}),
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'same-origin',
  }),
});

const initApollo = (initialState) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
};

export default initApollo;
