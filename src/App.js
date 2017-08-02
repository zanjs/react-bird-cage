import React from 'react'
// import {createHashHistory} from 'history'
import {
  // BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

import {routes, RouteWithSubRoutes} from './routes/'
import NotFound from './components/notFound'
import RoutePath from './routes/path'

// const hashHistory = createHashHistory()
// <HashRouter history={hashHistory}  >

const App = () => (
  <HashRouter >
    <div>
      <ul>
        <li><NavLink strict to={RoutePath.birds} activeClassName="active">birds</NavLink></li>
        <li><NavLink strict to={RoutePath.count} activeClassName="active">count</NavLink></li>
        <li><NavLink strict to={RoutePath.histtory} activeClassName="active">history</NavLink></li>
        <li><NavLink strict to="/tacos" activeClassName="active">Tacos</NavLink></li>
        <li><NavLink strict to="/404" activeClassName="active">404</NavLink></li>
      </ul>
      <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
      <Route component={NotFound}/>
      </Switch>
    </div>
  </HashRouter>
)

export default App