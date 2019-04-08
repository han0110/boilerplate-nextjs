const { readdirSync, statSync } = require('fs')
const { join } = require('path')
const Sequelize = require('sequelize')
const config = require('./config/config')

const getAllFiles = dir =>
  readdirSync(dir).reduce((files, file) => {
    const name = join(dir, file)
    // eslint-disable-next-line no-nested-ternary
    return statSync(name).isDirectory()
      ? [...files, ...getAllFiles(name)]
      : name.split('.')[1] === 'js' ? [...files, name] : files
  }, [])

class DB {
  async prepare() {
    try {
      this.Sequelize = Sequelize
      this.sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        {
          host: config.host,
          dialect: config.dialect,
          timezone: '+08:00',
          operatorsAliases: false,
          define: {
            freezeTableName: true,
            paranoid: false,
          },
          logging: false,
        },
      )

      const models = getAllFiles(`${__dirname}/models`).map(file => file.slice(0, -3))

      models.forEach(file => {
        this[file.split('/').pop()] = this.sequelize.import(file)
      })

      Object.keys(this).forEach(model => {
        if (this[model].associate) {
          this[model].associate(this)
        }
      })

      await this.sequelize.authenticate()
    } catch (e) {
      throw e
    }
  }
}

const db = new DB()

module.exports = db
