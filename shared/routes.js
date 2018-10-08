const Routes = require('next-routes')

const routes = new Routes()

routes
  .add('home', '/', 'index')
  .add('about', '/about', 'about')
  .add('home:lng', '/:lng', 'index')
  .add('about:lng', '/:lng/about', 'about')

module.exports = routes
