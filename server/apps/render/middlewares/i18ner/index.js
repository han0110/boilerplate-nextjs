const i18ner = (i18next) => (ctx, next) => {
  const i18n = i18next.cloneInstance({ initImmediate: false })

  // TODO: Detech language in headers, if language has been set in cookie,
  //       then change language, else detech from other information or
  //       fallback to default language.
  i18n.changeLanguage(i18next.options.fallbackLng[0])

  ctx.req.i18n = i18n

  return next()
}

module.exports = i18ner
