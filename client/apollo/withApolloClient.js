// @flow

import React from 'react';
import type { Node } from 'react';
import { getDataFromTree } from 'react-apollo';
import Head from 'next/head';
import initApollo from './initApollo';

type Props = {
  Component: Node,
  apolloState: Object,
  apolloClient: Object | null,
};

const withApolloClient = App => class WithApolloClient extends React.Component<Props> {
    static displayName = 'withApollo(App)';

    static async getInitialProps(ctx) {
      const { Component, router } = ctx;
      const apollo = initApollo();
      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      /* eslint-disable function-paren-newline */
      try {
        await getDataFromTree(
          <App
            {...appProps}
            Component={Component}
            router={router}
            apolloClient={apollo}
          />,
        );
      } catch (error) {
        console.error('Error while running \'getDataFromTree\'', error);
      }

      if (!process.browser) {
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = {
        data: apollo.cache.extract(),
      };

      return {
        apolloState,
        ...appProps,
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = props.apolloClient || initApollo(props.apolloState.data);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
};

export default withApolloClient;
