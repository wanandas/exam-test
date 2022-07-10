import React from 'react'
import { store } from '@core/store/store'
import { Provider as ReduxProvider } from 'react-redux'

const ComposeProvider = ({ children }) => {
  const providers = React.useMemo(() => [[ReduxProvider, { store }]], [])

  return providers.reduceRight((componentTree, cfg) => {
    const [Provider, props] = Array.isArray(cfg) ? cfg : [cfg, {}]
    return <Provider {...props}>{componentTree}</Provider>
  }, children)
}

export default ComposeProvider
