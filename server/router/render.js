const KoaRouter = require('koa-router');

const n = require('../next');
const routes = require('../../shared/routes');

const router = new KoaRouter();
const handle = routes.getRequestHandler(n);

router.get('*', async (ctx) => {
  await handle(ctx.req, ctx.res);
  ctx.respond = false;
});

module.exports = router;
