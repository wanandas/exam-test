import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ComposeProvider from '@core/providers/ComposeProvider'

import mainRouters from '@routers/mainRouters'

import 'antd/dist/antd.min.css'

const WebStateRouter = () => {
  const renderByWebState = React.useMemo(() => {
    const router = mainRouters
    return (
      <BrowserRouter>
        <Routes>
          {router.map(({ Component, path }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    )
  }, [])

  return (
    <ComposeProvider basename="/">
      <React.Suspense fallback={<div>loading</div>}>
        {renderByWebState}
      </React.Suspense>
    </ComposeProvider>
  )
}

ReactDOM.render(<WebStateRouter />, document.getElementById('root'))
