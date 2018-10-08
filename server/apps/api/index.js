const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const db = require('../../../db')
const router = require('./routes')

const app = new Koa()

db.attach(app)

app.prepare = async () => {
  await db.prepare()

  app.use(bodyParser())
  app.use(router.routes())
}

module.exports = app
