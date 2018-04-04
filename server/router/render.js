const KoaRouter = require('koa-router');

const { handle } = require('../next');

const router = new KoaRouter();

router.get('*', async (ctx) => {
  await handle(ctx.req, ctx.res);
  ctx.respond = false;
});

module.exports = router;
