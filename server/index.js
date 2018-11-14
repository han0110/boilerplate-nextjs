require('dotenv').config()
const Koa = require('koa')
const mount = require('koa-mount')
// Apps
const render = require('./apps/render')
const api = require('./apps/api')
// Handlers
const n = require('./apps/render/next')
const db = require('../db')
// Middlewares
const logger = require('./middlewares/logger')
// Config
const serverConfig = require('./config')

const app = new Koa()

db.attach(app)

const bootstrap = async () => {
  await n.prepare()
  await db.prepare()

  app.use(logger())
  app.use(mount('/_next', render))
  app.use(mount('/api', api))
  app.use(mount(render))

  app.listen(serverConfig.port, () =>
    // eslint-disable-next-line no-console
    console.log(`Koa running on port ${serverConfig.port}`),
  )
}

// eslint-disable-next-line no-console
bootstrap().catch(console.error)
