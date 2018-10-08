const next = require('next')

const config = require('../../../shared/config')

const dev = process.env.NODE_ENV !== 'production'
const n = next({ dev, dir: config.path.client })

module.exports = n
