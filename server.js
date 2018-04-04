const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const n = next({ dev, dir: './src' });
const handle = n.getRequestHandler();

n.prepare().then(() => {
  const app = new Koa();
  const router = new Router();

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  // eslint-disable-next-line no-shadow
  app.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  app.use(router.routes()).use(router.allowedMethods());

  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`Koa running on port ${port}`));
});
