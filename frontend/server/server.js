require('dotenv').config()
const http = require('http')
const Koa = require('koa')
// Apps
const render = require('./services/render')
// Middleware
const logger = require('./middlewares/logger')
// Configs
const config = require('./config')

const app = new Koa()

app.proxy = true

const prepare = async () => {
  await render.prepare()

  app.use(logger())
  app.use(render.handler())
}

const bootstrap = async () => {
  await prepare()
  const httpServer = http.createServer(app.callback())

  return httpServer.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Frontend running on port ${config.port}`)
  })
}

module.exports = { bootstrap }
