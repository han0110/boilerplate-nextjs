const util = require('util')
const serializeError = require('serialize-error')
const chalk = require('chalk')
const { createLogger, format, transports } = require('winston')

const production = process.env.NODE_ENV === 'production'

const coloredStatus = (status) => {
  if (production) {
    return status
  }
  if (status >= 200 && status < 300) {
    return chalk.green.inverse(` ${status} `)
  }
  if (status >= 300 && status < 400) {
    return chalk.white.inverse(` ${status} `)
  }
  if (status >= 400 && status < 500) {
    return chalk.yellow.inverse(` ${status} `)
  }
  return chalk.red.inverse(` ${status} `)
}

const coloredMethod = (method) => {
  if (production) {
    return method.padStart(7)
  }
  switch (method) {
    case "GET":
      return chalk.blue(`    ${method}`)
    case "POST":
      return chalk.cyan(`   ${method}`)
    case "PUT":
      return chalk.yellow(`    ${method}`)
    case "DELETE":
      return chalk.red(` ${method}`)
    case "PATCH":
      return chalk.green(`  ${method}`)
    case "HEAD":
      return chalk.magenta(`   ${method}`)
    case "OPTIONS":
      return chalk.white(method)
    default:
      return method.padStart(7)
  }
}

const formatter = format.printf(
  ({ message }) => util.format(
    '%s %s  %s +%sms %s',
    coloredStatus(message.status),
    coloredMethod(message.method),
    message.url.padEnd(60),
    message.duration,
    message.error ? serializeError(message.error) : '',
  )
)

const log = createLogger({
  format: formatter,
  transports: [new transports.Console()],
})

const response = message => {
  let level

  if (message.url.includes('/_next')) {
    level = 'debug'
  } else if (message.status >= 200 || message.status < 400) {
    level = 'info'
  } else if (message.status >= 400 || message.status < 500) {
    level = 'warn'
  } else {
    level = 'error'
  }

  log[level](message)
}

module.exports = { response }
