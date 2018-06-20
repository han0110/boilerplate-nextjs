// @flow

import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

import withApolloClient from '../apollo/withApolloClient';

class MyApp extends App {
  render() {
    const { apolloClient, pageProps, Component } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
