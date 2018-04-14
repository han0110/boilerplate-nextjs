const Routes = require('next-routes');

const routes = new Routes();

routes
  .add('home', '/', 'index')
  .add('about', '/about', 'about');

module.exports = routes;
