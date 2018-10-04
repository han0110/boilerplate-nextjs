const { createLogger, format, transports } = require('winston')

const { combine, printf } = format

const dev = process.env.NODE_ENV !== 'production'

const ignore = format(info => {
  if (info.message && info.message.url && info.message.url.includes('/_next')) {
    return false
  }
  return info
})

const logFormat = printf(
  ({ message, level }) => `${JSON.stringify({ level, ...message })}`,
)

const consoleFormat = printf(
  ({ message, level }) =>
    `${level} ${message.method} ${message.url} ${message.status} +${message.duration}ms`,
)

const winstonLogger = createLogger({
  format: combine(ignore(), logFormat),
  transports: [
    ...(dev ? [new transports.Console({ format: consoleFormat })] : []),
    new transports.File({
      filename: `${__dirname}/log/error.log`,
      level: 'error',
    }),
    new transports.File({ filename: `${__dirname}/log/combined.log` }),
  ],
})

const response = log => {
  const { error, ...props } = log

  let level

  if (error) {
    level = 'error'
  } else {
    level = 'info'
  }

  winstonLogger[level](props)
}

module.exports = { response }
