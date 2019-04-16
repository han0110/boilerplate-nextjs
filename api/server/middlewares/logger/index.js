const onFinished = require('on-finished')
const { response } = require('./winston')

const logger = () => async (ctx, next) => {
  const startTime = new Date().getTime()
  const timestamp = new Date(startTime)
    .toLocaleString('ch', { timeZone: 'Asia/Taipei' })

  try {
    await next()
  } catch (e) {
    ctx.error = e
    ctx.status = e.status || 500
    if (e.expose) {
      ctx.body = { error: e.message }
    }
  } finally {
    onFinished(
      ctx.res,
      response.bind(null, {
        timestamp,
        method: ctx.method,
        url: ctx.url,
        status: ctx.status,
        duration: new Date().getTime() - startTime,
        error: ctx.error,
      }),
    )
  }
}

module.exports = logger
