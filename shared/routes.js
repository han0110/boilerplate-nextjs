const Routes = require('next-routes')

const routes = Routes()
  .add('home', '/', 'index')
  .add('page1', '/page1', 'page1')
  .add('page2', '/page2', 'page2')

module.exports = routes
