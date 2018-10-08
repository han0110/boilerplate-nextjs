const i18n = require('i18next')
const Backend = require('i18next-node-fs-backend')

const config = require('../../../shared/config')

i18n.prepare = async () => {
  await i18n
    .use(Backend)
    .init({
      backend: { loadPath: `${config.path.client}/assets/locales/{{lng}}/{{ns}}.json` },
      preload: ['en', 'zh'],
      ...config.i18n,
    })
}

module.exports = i18n
