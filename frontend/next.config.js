const withPlugins = require('next-compose-plugins')
const images = require('next-images')
const sass = require('@zeit/next-sass')

// next.js config
const nextConfig = {
  useFileSystemPublicRoutes: false,
  distDir: 'build',
}

module.exports = withPlugins(
  [
    [
      sass,
      {
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: '[name]___[local]___[hash:base64:5]',
        },
      },
    ],
    images
  ],
  nextConfig,
)
