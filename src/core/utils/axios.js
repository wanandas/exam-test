import axios from 'axios'
import { identity, pickBy } from 'lodash'
import env from '@core/config/env'

export const getInstance = () => {
  const instance = axios.create()

  instance.defaults.baseURL = env.API_URL
  instance.interceptors.request.use((request) => {
    request.headers = {
      ...request.headers
    }

    const paramKey = ['POST', 'PATCH'].includes(request.method.toUpperCase())
      ? 'data'
      : 'params'

    // If not Multipart formdata
    if (request.headers['Content-Type'] !== 'multipart/form-data') {
      request[paramKey] = pickBy(request[paramKey], (value) => {
        const whitelistValues = [false, 0, '']

        return identity(value) || whitelistValues.includes(value)
      })
    }

    return request
  })

  return instance
}
