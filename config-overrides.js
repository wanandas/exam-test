/* eslint-disable react-hooks/rules-of-hooks */
const { override, getBabelLoader, useBabelRc } = require('customize-cra')

const removeBultinBabelConfig = (config) => {
  getBabelLoader(config).options.presets = []

  return config
}

module.exports = override(removeBultinBabelConfig, useBabelRc())
