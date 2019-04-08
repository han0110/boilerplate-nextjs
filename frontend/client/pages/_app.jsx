import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
// Hooks
import { initStore, getStore } from '../hooks/redux'
// Style
import '../styles/style.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const store = getStore()

    ctx.store = store

    const initialProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { initialProps, initialState: store.getState() }
  }

  constructor(props) {
    super(props)
    initStore(props.initialState)
  }

  render() {
    const { Component, initialProps } = this.props

    return <Container>
      <Head>
        <title>Next.js Boilerplate</title>
      </Head>
      <Provider store={getStore()}>
        <Component {...initialProps} />
      </Provider>
    </Container>
  }
}

export default MyApp
