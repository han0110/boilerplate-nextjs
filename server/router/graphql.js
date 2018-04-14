const KoaRouter = require('koa-router');
const KoaBody = require('koa-bodyparser');
const { graphqlKoa } = require('apollo-server-koa');

const schema = require('../graphql/schema');

const router = new KoaRouter();

router.post('/graphql', KoaBody(), graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));

module.exports = router;
