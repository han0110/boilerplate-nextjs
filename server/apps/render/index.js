const Koa = require('koa')

const n = require('./next')
const routes = require('../../../shared/routes')

const app = new Koa()
const handle = routes.getRequestHandler(n)

const handler = async (ctx) => {
  ctx.url = `${ctx.mountPath || ''}${ctx.url}`

  ctx.res.statusCode = 200
  ctx.respond = false
  await handle(ctx.req, ctx.res)
}

app.use(handler)

module.exports = app
