const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const n = next({ dev, dir: `${__dirname}/../../../client` })

module.exports = n
