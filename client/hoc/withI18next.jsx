import React from 'react'
import { NamespacesConsumer } from 'react-i18next'
import i18next from 'i18next'
import XHR from 'i18next-xhr-backend'

import config from '../../shared/config'

if (process.browser) {
  i18next
    .use(XHR)
    .init(config.i18n)
}

const withI18next = (
  namespaces = ['common'],
) => ComposedComponent => {
  const Extended = ({ i18n, ...rest }) => {
    const finalI18n = i18n || i18next

    return (
      <NamespacesConsumer
        wait={process.browser}
        i18n={finalI18n}
        ns={namespaces}
        {...rest}
      >
        {t => <ComposedComponent t={t} {...rest} />}
      </NamespacesConsumer>
    )
  }

  Extended.getInitialProps = async ctx => {
    const composedInitialProps = ComposedComponent.getInitialProps
      ? await ComposedComponent.getInitialProps(ctx)
      : {}

    const i18nInitialProps = { i18n: i18next }

    if (ctx.req && ctx.req.i18n) {
      ctx.req.i18n.toJSON = () => null

      Object.assign(i18nInitialProps, {
        i18n: ctx.req.i18n,
        initialLanguage: ctx.req.i18n.language,
        initialI18nStore: {},
      })

      ctx.req.i18n.languages.forEach(l => {
        i18nInitialProps.initialI18nStore[l] = {}
        namespaces.forEach(ns => {
          i18nInitialProps.initialI18nStore[l][ns] =
            (ctx.req.i18n.services.resourceStore.data[l] || {})[ns] || {}
        })
      })
    } else {
      i18nInitialProps.i18n.changeLanguage(ctx.query.lng || 'zh')
    }

    return {
      ...composedInitialProps,
      ...i18nInitialProps,
    }
  }

  return Extended
}

export default withI18next
