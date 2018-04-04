const withSass = require('@zeit/next-sass');

module.exports = withSass({
  distDir: '../build',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.otf/,
      exclude: /node_modules/,
      loader: 'url-loader',
      options: {
        publicPath: '/_next/',
        mimetype: 'application/octet-stream',
        name: 'static/fonts/[hash].[ext]',
        limit: 10000,
      },
    });
    return config;
  },
});
