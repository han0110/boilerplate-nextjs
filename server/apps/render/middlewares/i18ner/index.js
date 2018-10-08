const i18ner = (i18next) => (ctx, next) => {
  const i18n = i18next.cloneInstance({ initImmediate: false })

  i18n.on('languageChanged', (lng) => {
    if (!ctx.res.headersSent) {
      ctx.set('Content-Language', lng)
    }
  })

  const query = ctx.path.split('/')[1]
  const lng = ['en', 'zh'].includes(query) ? query : i18next.options.fallbackLng[0]

  i18n.changeLanguage(lng)

  ctx.req.i18n = i18n

  if (!ctx.res.headersSent) {
    ctx.set('Content-Language', lng)
  }

  return next()
}

module.exports = i18ner
