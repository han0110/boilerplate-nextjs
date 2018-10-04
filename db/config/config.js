const config = {
  development: {
    username: 'dev',
    password: 'dev',
    database: 'dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'test',
    password: 'test',
    database: 'test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
}

Object.assign(config, config[process.env.NODE_ENV])

module.exports = config
