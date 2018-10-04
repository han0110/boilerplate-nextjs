require('dotenv').config()
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const n = require('./next')
const db = require('../db')

const logger = require('./middlewares/logger')
const router = require('./routes')

const config = require('./config')

const app = new Koa()

db.attach(app)

const bootstrap = async () => {
  await n.prepare()
  await db.prepare()

  app.use(logger())
  app.use(bodyParser())
  app.use(router.routes())

  app.listen(config.port, () =>
    // eslint-disable-next-line no-console
    console.log(`Koa running on port ${config.port}`),
  )
}

// eslint-disable-next-line no-console
bootstrap().catch(console.error)
