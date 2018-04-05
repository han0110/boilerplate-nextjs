const KoaRouter = require('koa-router');
const KoaBody = require('koa-bodyparser');
const { graphqlKoa } = require('apollo-server-koa');

const router = new KoaRouter();

router.post('/graphql', KoaBody(), graphqlKoa({ schema: '' }));

module.exports = router;
