import React, { Component } from 'react'
import i18next from 'i18next'
import XHR from 'i18next-xhr-backend'

import config from '../../shared/config'

const NEXT_I18N = '__NEXT_I18N__'

const getI18n = () => {
  if (!window[NEXT_I18N]) {
    window[NEXT_I18N] = i18next.use(XHR).init(config.i18n)
  }

  return window[NEXT_I18N]
}

const withI18n = App =>
  class WrappedApp extends Component {
    static getInitialProps = async appCtx => {
      const initialProps = App.getInitialProps
        ? await App.getInitialProps(appCtx)
        : {}

      const i18nProps = {}

      if (!process.browser) {
        appCtx.ctx.req.i18n.toJSON = () => null // eslint-disable-line no-param-reassign

        Object.assign(i18nProps, {
          i18n: appCtx.ctx.req.i18n,
          initialLanguage: appCtx.ctx.req.i18n.language,
          initialI18nStore: {},
        })

        appCtx.ctx.req.i18n.languages.forEach(l => {
          i18nProps.initialI18nStore[l] = appCtx.ctx.req.i18n.services.resourceStore.data[l] || {}
        })
      } else {
        Object.assign(i18nProps, { i18n: getI18n() })
        i18nProps.i18n.changeLanguage(appCtx.ctx.query.lng || 'zh')
      }

      return {
        i18nProps,
        ...initialProps,
      }
    }

    constructor(props) {
      super(props)

      if (process.browser) {
        this.i18n = getI18n()
      } else {
        this.i18n = props.i18nProps.i18n
      }
    }

    render() {
      return <App {...this.props} i18n={this.i18n} />
    }
  }

export default withI18n
