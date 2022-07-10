module.export = {
  compilerOptions: {
    baseUrl: './src',
    paths: {
      '@components/*': ['components/*'],
      '@core/*': ['core/*'],
      '@locales/*': ['locales/*'],
      '@routers/*': ['routers/*'],
      '@constants/*': ['constants/*']
    }
  },
  exclude: ['node_modules']
}
