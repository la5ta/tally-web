/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => { };
}

module.exports = withPlugins([
  [
    withLess(
      withSass({
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
      })
    ),
  ],
  [
    optimizedImages,
    {
      imagesPublicPath: '@images/',
    },
  ],
]);
