/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')
const { withPlugins, optional } = require('next-compose-plugins')

const nextConfig = {
  useFileSystemPublicRoutes: false,
  distDir: '../build',
}

module.exports = withPlugins(
  [
    [optional(() => require('@zeit/next-sass')), {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[name]___[local]___[hash:base64:5]',
        camelCase: true,
      },
    }, [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD]],
    [optional(() => require('next-images')), [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD]],
  ],
  nextConfig,
)
