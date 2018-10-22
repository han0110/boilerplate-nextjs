import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from "react-redux"
import { I18nextProvider } from 'react-i18next'

import withRedux from '../hoc/withRedux'
import withI18n from '../hoc/withI18n'

import '../styles/style.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store, i18n, i18nProps } = this.props

    return (
      <Container>
        <Head>
          <title>NEXT.js</title>
        </Head>
        <Provider store={store}>
          <I18nextProvider {...i18nProps} i18n={i18n}>
            <Component {...pageProps} />
          </I18nextProvider>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(withI18n(MyApp))
