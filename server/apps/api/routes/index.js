const KoaRouter = require('koa-router')

const api = require('./api')

const router = new KoaRouter()

router.use('/', api.routes())

module.exports = router
