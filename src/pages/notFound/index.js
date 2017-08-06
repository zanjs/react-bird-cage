import React from 'react'
import {Helmet} from 'react-helmet'

const NoMatch = ({ location }) => (
  <div>
    <Helmet>
      <title>Not found 404</title>
    </Helmet>
    <h3>Not Found for <code>{location.pathname}</code></h3>
  </div>
)

export default NoMatch