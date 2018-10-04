const Routes = require('next-routes')

const routes = new Routes()

routes
  .add('home', '/', 'index')

module.exports = routes
