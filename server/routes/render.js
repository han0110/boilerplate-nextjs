const KoaRouter = require('koa-router')

const n = require('../next')
const routes = require('../../shared/routes')

const router = new KoaRouter()
const handle = routes.getRequestHandler(n)

router.get('*', async ctx => {
  ctx.res.statusCode = 200
  ctx.respond = false
  await handle(ctx.req, ctx.res)
})

module.exports = router
