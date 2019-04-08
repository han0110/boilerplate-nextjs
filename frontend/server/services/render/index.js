const next = require('next')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const n = next({ dev, dir: `${__dirname}/../../../client` })

const handler = () => {
  const handle = routes.getRequestHandler(n)

  return async ctx => {
    ctx.url = `${ctx.mountPath || ''}${ctx.url}`

    ctx.res.statusCode = 200
    ctx.respond = false
    await handle(ctx.req, ctx.res)
  }
}

const prepare = async () => {
  await n.prepare()
}

module.exports = { prepare, handler }
