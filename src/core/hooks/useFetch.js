import React from 'react'
import { getInstance } from '@core/utils'

const useFetch = ({
  url = '',
  method = 'GET',
  isMultipart,
  headers,
  baseURL = null
}) => {
  const [pending, setPending] = React.useState(false)
  const [data, setData] = React.useState()

  const axiosInstance = React.useMemo(() => {
    return getInstance()
  }, [])

  const execute = React.useCallback(
    async (
      { url: postUrl, payload, headers: executeHeader },
      { onSuccess, onFailed, onFinally } = {}
    ) => {
      setPending(true)
      try {
        const parameter = {
          method,
          headers: {
            ...(isMultipart && {
              'Content-Type': 'multipart/form-data'
            }),
            ...headers,
            ...executeHeader
          },
          ...(['GET', 'DELETE'].includes(method)
            ? { params: payload }
            : { data: payload })
        }

        const opt = {
          url: postUrl ? url + postUrl : url,
          ...parameter
        }

        if (baseURL) {
          Object.assign(opt, {
            baseURL
          })
        }
        const response = await axiosInstance(opt)

        if (response) {
          setData(onSuccess ? await onSuccess(response) : response)
        } else {
          throw new Error('No Response')
        }
      } catch (error) {
        console.error(error)

        if (onFailed) {
          await onFailed(error)
        }
      } finally {
        if (onFinally) {
          await onFinally()
        }

        setPending(false)
      }
    },
    [axiosInstance, headers, isMultipart, method, url, baseURL]
  )

  return { execute, pending, data }
}

export default useFetch
