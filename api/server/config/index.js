const config = {
  development: {
    port: 3001,
    allowOrigin: '*',
  },
  production: {
    port: process.env.PORT || 3000,
    allowOrigin: process.env.ALLOW_ORIGIN || 'your.domain',
  },
}

Object.assign(config, config[process.env.NODE_ENV || 'development'])

module.exports = config
