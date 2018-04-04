const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const n = next({ dev, dir: './client' });
const handle = n.getRequestHandler();

module.exports = { n, handle };
