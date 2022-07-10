import { flowRight as compose } from 'lodash'

import withMeta from './withMeta'

const withPage = (options) => (Component) => {
  const hocs = [withMeta(options)]

  return compose(...hocs)(Component)
}

export default withPage
