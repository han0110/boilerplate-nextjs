const KoaRouter = require('koa-router')

const api = require('./api')
const render = require('./render')

const router = new KoaRouter()

router.use('/api', api.routes())
router.use('*', render.routes())

module.exports = router
