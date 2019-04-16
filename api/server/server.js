require('dotenv').config()
const http = require('http')
const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
// Apps
const v1 = require('./services/v1')
// Handlers
const db = require('../db')
// Middlewares
const logger = require('./middlewares/logger')
// Configs
const config = require('./config')

const app = new Koa()

app.proxy = true

const prepare = async () => {
  await db.prepare()

  app.use(logger())
  app.use(cors({
    origin: config.allowOrigin,
  }))
  app.use(bodyParser())
  app.use(v1.routes())
}

const bootstrap = async () => {
  await prepare()
  const httpServer = http.createServer(app.callback())

  return httpServer.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server running on port ${config.port}`)
  })
}

module.exports = { bootstrap }
