require('dotenv').config()
const Koa = require('koa')
const mount = require('koa-mount')
const serve = require('koa-static')

// apps
const render = require('./apps/render')
const api = require('./apps/api')

// global middlewares
const logger = require('./middlewares/logger')

// config
const config = require('../shared/config')
const serverConfig = require('./config')

const app = new Koa()

const bootstrap = async () => {
  await render.prepare()
  await api.prepare()

  app.use(logger())
  app.use(mount('/locales', serve(`${config.path.client}/assets/locales`)))
  app.use(mount('/api', api))
  app.use(mount(render))

  app.listen(serverConfig.port, () =>
    // eslint-disable-next-line no-console
    console.log(`Koa running on port ${serverConfig.port}`),
  )
}

// eslint-disable-next-line no-console
bootstrap().catch(console.error)
// require('dotenv').config()
// const Koa = require('koa')
// const bodyParser = require('koa-bodyparser')

// const n = require('./apps/render/next')
// const db = require('../db')
// const i18n = require('./apps/render/i18n')

// const logger = require('./middlewares/logger')
// const i18ner = require('./middlewares/i18n')
// const router = require('./routes')
// const render = require('./routes/render')

// const config = require('./config')

// const app = new Koa()

// db.attach(app)

// const bootstrap = async () => {
//   await n.prepare()
//   await db.prepare()
//   await i18n.prepare()

//   app.use(logger())
//   app.use(bodyParser())
//   app.use(router.routes())
//   app.use(i18ner(i18n))
//   app.use(render.routes())

//   app.listen(config.port, () =>
//     // eslint-disable-next-line no-console
//     console.log(`Koa running on port ${config.port}`),
//   )
// }

// // eslint-disable-next-line no-console
// bootstrap().catch(console.error)
