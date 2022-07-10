import React from 'react'

export default [
  {
    path: '/market/:symbol',
    Component: React.lazy(() =>
      import(
        /* webpackChunkName: "Market-page" */ '@components/pages/MarketPage'
      )
    ),
    exact: true
  }
]
