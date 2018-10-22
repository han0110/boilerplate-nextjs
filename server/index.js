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
