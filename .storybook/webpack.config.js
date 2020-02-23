const path = require('path');
const glob = require('glob');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  /**
   * Exclude pacakge's `node_modules` from Storybook babel processing.
   * Is needed to make dynamic import of font-awesome icons work correctly.
   */
  const babelLoader = config.module.rules[0];
  glob.sync('./src/components/*/node_modules').forEach(match => {
    babelLoader.exclude.push(path.resolve(match));
  });

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'sass-loader'
    ]
  });

  // Return the altered config
  return config;
};