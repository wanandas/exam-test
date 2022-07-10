const NODE_ENV = process.env.NODE_ENV || 'development'
const envObj = {
  dev: {
    NODE_ENV,
    API_URL: process.env.REACT_APP_API_URL,
    SOCKET_URL: process.env.REACT_APP_SOCKET_URL
  }
}

module.exports = envObj.dev
