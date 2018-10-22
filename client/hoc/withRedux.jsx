import React, { Component } from 'react'

import initStore from '../redux/store'

const NEXT_REDUX_STORE = '__NEXT_REDUX_STORE__'

const getStore = initialState => {
  if (!process.browser) return initStore(initialState)

  if (!window[NEXT_REDUX_STORE]) {
    window[NEXT_REDUX_STORE] = initStore(initialState)
  }

  return window[NEXT_REDUX_STORE]
}

const withRedux = App =>
  class WrappedApp extends Component {
    static getInitialProps = async appCtx => {
      const initialProps = App.getInitialProps
        ? await App.getInitialProps(appCtx)
        : {}

      const store = getStore()
      appCtx.ctx.store = store // eslint-disable-line no-param-reassign

      return {
        store,
        initialState: store.getState(),
        ...initialProps,
      }
    }

    constructor(props) {
      super(props)
      this.store = getStore(props.initialState)
    }

    render() {
      return <App {...this.props} store={this.store} />
    }
  }

export default withRedux
