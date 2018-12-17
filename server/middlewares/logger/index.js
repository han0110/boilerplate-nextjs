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
    ctx.body = e.message
    ctx.log = { message: e.message }
  } finally {
    response({
      timestamp,
      method: ctx.method,
      url: ctx.url,
      status: ctx.status,
      log: ctx.log,
      duration: new Date().getTime() - startTime,
      error,
    })
  }
}

module.exports = logger
