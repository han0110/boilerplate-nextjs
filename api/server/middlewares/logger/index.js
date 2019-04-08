const { response } = require('./winston')

const logger = () => async (ctx, next) => {
  const startTime = new Date().getTime()
  const timestamp = new Date(startTime).toLocaleString('ch', {
    timeZone: 'Asia/Taipei',
  })

  try {
    await next()
  } catch (e) {
    ctx.status = e.status || 400
    ctx.log = { message: e.message }
  } finally {
    response({
      timestamp,
      method: ctx.method,
      url: ctx.url,
      status: ctx.status,
      log: ctx.log,
      duration: new Date().getTime() - startTime,
    })
  }
}

module.exports = logger
