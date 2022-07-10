import React from 'react'
import { Helmet } from 'react-helmet'

const withMeta = (options) => (PageComponent) => {
  return (props) => {
    const { title, meta = [] } = options

    const displayTitle = React.useMemo(() => {
      if (title) {
        return <title>{title}</title>
      }
      return null
    }, [title])

    return (
      <>
        <Helmet>
          {displayTitle}
          {Object.keys(meta).map((name) => (
            <meta key={name} name={name} content={meta[name]} />
          ))}
        </Helmet>
        <PageComponent {...props} />
      </>
    )
  }
}

export default withMeta
