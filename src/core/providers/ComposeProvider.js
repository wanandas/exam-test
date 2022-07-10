import React from 'react'

const ComposeProvider = ({ children }) => {
  const providers = React.useMemo(() => [], [])

  return providers.reduceRight((componentTree, cfg) => {
    const [Provider, props] = Array.isArray(cfg) ? cfg : [cfg, {}]
    return <Provider {...props}>{componentTree}</Provider>
  }, children)
}

export default ComposeProvider
