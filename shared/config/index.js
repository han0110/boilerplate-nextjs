const config = {
  path: {
    root: `${__dirname}/../..`,
    server: `${__dirname}/../../server`,
    client: `${__dirname}/../../client`,
  },
  i18n: {
    defaultNS: 'common',
    fallbackLng: 'zh',
    load: 'languageOnly',
    ns: ['common', 'about'],
  }
}

module.exports = config
