/* eslint-disable global-require */

const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFont = require('next-fonts')

module.exports = withSass(
  withImages(
    withFont({
      distDir: '../build',
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[name]___[local]___[hash:base64:5]',
      },
      postcssLoaderOptions: {
        plugins: [require('autoprefixer')({})],
      },
    }),
  ),
)
