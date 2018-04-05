const Koa = require('koa');

const { n } = require('./next');

const render = require('./router/render');
const graphql = require('./router/graphql');

const app = new Koa();

const bootstrap = async () => {
  await n.prepare();

  app.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  app.use(render.routes());
  app.use(graphql.routes()).use(graphql.allowedMethods());

  // eslint-disable-next-line no-console
  app.listen(3000, () => console.log('Koa running on port 3000'));
};

bootstrap();
