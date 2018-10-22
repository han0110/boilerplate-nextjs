const Routes = require('next-routes')

const routes = Routes()
  .add('home', '/', 'index')
  .add('about', '/about', 'about')
  .add('login', '/login', 'login')
  .add('signup', '/signup', 'signup')
  .add('home:lng', '/:lng', 'index')
  .add('about:lng', '/:lng/about', 'about')
  .add('login:lng', '/:lng/login', 'login')
  .add('signup:lng', '/:lng/signup', 'signup')

module.exports = routes
