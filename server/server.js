require('dotenv').config()
const http = require('http')
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
const config = require('./config')

const app = new Koa()
const httpServer = http.createServer(app.callback())

const prepare = async () => {
  await n.prepare()
  await db.prepare()

  app.use(logger())
  app.use(mount('/_next', render))
  app.use(mount('/api', api))
  app.use(mount(render))
}

const bootstrap = async () => {
  await prepare()

  return httpServer.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Koa running on port ${config.port}`)
  })
}

module.exports = { prepare, bootstrap }
