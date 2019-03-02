const Koa = require('koa')
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new KoaRouter({ prefix: '/v1' })

Object.assign(router, {
  ALL: router.all,
  GET: router.get,
  POS: router.post,
  PUT: router.put,
  DEL: router.delete,
})

app.use(bodyParser())
app.use(router.routes())

module.exports = app
