import React from 'react'
import {
  Route,
  NavLink
} from 'react-router-dom'

import RoutePath from './path'
import About from '../components/about'
import Home from '../components/home'
import Birds from '../components/birds'
import Count from '../components/count'
import HistoryView from '../components/history'
import Topics from '../components/topics'
// import NotFound from '../components/notFound'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
// const Main = () => <h2>Main</h2>

// const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><NavLink to="/tacos/bus">Bus</NavLink></li>
      <li><NavLink to="/tacos/cart">Cart</NavLink></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: RoutePath.home,
    exact: true,
    component: Home
  },
  { path: RoutePath.about,
    component: About
  },
  { path: RoutePath.birds,
    component: Birds
  },
  {
    path: RoutePath.count,
    component: Count
  },
  {
    path: RoutePath.histtory,
    component: HistoryView
  },
  {
    path: RoutePath.topics,
    component: Topics
  },
  { path: '/tacos',
    component: Tacos,
    routes: [
      { path: '/tacos/bus',
        component: Bus
      },
      { path: '/tacos/cart',
        component: Cart
      }
    ]
  },
//   {
//     component: NotFound
//   }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export {
    routes,
    RouteWithSubRoutes
} 