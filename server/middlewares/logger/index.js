const onFinished = require('on-finished')
const { response } = require('./winston')

const logger = () => async (ctx, next) => {
  const startTime = new Date().getTime()
  const timestamp = new Date(startTime).toLocaleString('ch', {
    timeZone: 'Asia/Taipei',
  })

  let error = false

  try {
    await next()
  } catch (e) {
    error = true
    ctx.status = e.status || 400
    ctx.log = { message: e.message }
  } finally {
    onFinished(
      ctx.response,
      response.bind(null, {
        timestamp,
        method: ctx.method,
        url: ctx.url,
        status: ctx.status,
        log: ctx.log,
        duration: new Date().getTime() - startTime,
        error,
      }),
    )
  }
}

module.exports = logger
