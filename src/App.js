import React from 'react'
// import {createHashHistory} from 'history'
import {
  // BrowserRouter as Router,
  HashRouter,
  NavLink
} from 'react-router-dom'
import queryString from 'query-string'
// import { createLocation } from 'history'

import RoutePath from './routes/path'
import RouteComment from './routes'


// const hashHistory = createHashHistory()
// <HashRouter history={hashHistory}  >

// const location = createLocation()

const parsed = queryString.parse(window.location.search);
console.log(window.location);
console.log(parsed)

const App = () => (
  <HashRouter >
    <div>
      <ul>
        <li><NavLink strict exact to={RoutePath.home} activeClassName="active">Home</NavLink></li>
        <li><NavLink strict to={RoutePath.birds} activeClassName="active">birds</NavLink></li>
        <li><NavLink strict to={RoutePath.count} activeClassName="active">count</NavLink></li>
        <li><NavLink strict to={RoutePath.histtory} activeClassName="active">history</NavLink></li>
        <li><NavLink strict to={RoutePath.topics} activeClassName="active">topics</NavLink></li>
        <li><NavLink strict to="/tacos" activeClassName="active">Tacos</NavLink></li>
        <li><NavLink strict to={RoutePath.lazyRoute} activeClassName="active">lazyRoute</NavLink></li>
        <li><NavLink strict to="/404" activeClassName="active">404</NavLink></li>
      </ul>
      <RouteComment />
    </div>
  </HashRouter>
)

export default App