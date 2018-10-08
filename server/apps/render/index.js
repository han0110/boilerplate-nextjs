const Koa = require('koa')

const n = require('./next')
const i18n = require('./i18n')
const i18ner = require('./middlewares/i18ner')
const routes = require('../../../shared/routes')

const app = new Koa()
const handle = routes.getRequestHandler(n)

const handler = async (ctx) => {
  ctx.res.statusCode = 200
  ctx.respond = false
  await handle(ctx.req, ctx.res)
}

app.prepare = async () => {
  await n.prepare()
  await i18n.prepare()

  app.use(async (ctx, next) => {
    if (ctx.path.includes('/_next')) {
      await handler(ctx)
    } else {
      await next()
    }
  })
  app.use(i18ner(i18n))
  app.use(handler)
}

module.exports = app
