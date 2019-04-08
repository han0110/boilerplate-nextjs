const KoaRouter = require('koa-router')

const router = new KoaRouter({ prefix: '/v1' })

Object.assign(router, {
  ALL: router.all,
  GET: router.get,
  POS: router.post,
  PUT: router.put,
  DEL: router.delete,
})

router.POS('/echo', async (ctx) => {
  ctx.body = ctx.request.body
  ctx.status = 200
})

module.exports = router
