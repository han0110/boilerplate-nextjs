const { createLogger, format, transports } = require('winston')

const { combine, printf } = format

const ignore = format(info => {
  if (info.message && info.message.url && info.message.url.includes('/_next')) {
    return false
  }
  return info
})

const formatter = printf(
  ({ message, level }) =>
    `${level} ${message.method} ${message.url} ${message.status} +${message.duration}ms`,
)

const winstonLogger = createLogger({
  format: combine(ignore(), formatter),
  transports: [new transports.Console()],
})

const response = log => {
  let level

  if (log.status >= 200 || log.status < 400) {
    level = 'info'
  } else if (log.status >= 400 || log.status < 500) {
    level = 'warn'
  } else {
    level = 'error'
  }

  winstonLogger[level](log)
}

module.exports = { response }
