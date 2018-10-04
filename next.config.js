const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFont = require('next-fonts')

module.exports = withSass(
  withImages(
    withFont({
      distDir: '../build',
    }),
  ),
)
