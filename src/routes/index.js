import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router'
import RouteLazy from "route-lazy"

// import Bundle from './bundle'
import RoutePath from './path'
import NotFound from '../components/notFound'
// import About from "../components/about'
// import Home from "../components/home'
// import Birds from "../components/birds'
// import Count from "../components/count'
// import HistoryView from "../components/history'
// import Topics from "../components/topics'
// import NotFound from "../components/notFound'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
// const Main = () => <h2>Main</h2>

// const Sandwiches = () => <h2>Sandwiches</h2>

// const Tacos = ({ routes }) => (
//   <div>
//     <h2>Tacos</h2>
//     <ul>
//       <li><NavLink to="/tacos/bus">Bus</NavLink></li>
//       <li><NavLink to="/tacos/cart">Cart</NavLink></li>
//     </ul>

//     {routes.map((route, i) => (
//       <RouteWithSubRoutes key={i} {...route}/>
//     ))}
//   </div>
// )

// const Bus = () => <h3>Bus</h3>
// const Cart = () => <h3>Cart</h3>

////////////////////////////////////////////////////////////
// then our route config
// const routes = [
//   {
//     path: RoutePath.home,
//     exact: true,
//     component: "../components/home"
//   },
//   { path: RoutePath.about,
//     component: "../components/about"
//   },
//   { path: RoutePath.birds,
//     component: "../components/birds"
//   },
//   {
//     path: RoutePath.count,
//     component: "../components/count"
//   },
//   {
//     path: RoutePath.histtory,
//     component: "../components/history"
//   },
//   {
//     path: RoutePath.topics,
//     component: "../components/topics"
//   },
// ]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={props => (
//     // pass the sub-routes down to keep nesting
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )

// const RouteWithSubRoutes = (route) => (
//   <Route 
//     path={route.path} 
//     render={props => (
//     // pass the sub-routes down to keep nesting
//     <RouteLazy {...props} component={import('../components/topics')} />
//   )}/>
// )

class RouteComment extends Component {
  render() {
    return (
       <div>
         <Switch> 
          <Route
              exact
              path={RoutePath.home}
              render={props => (
                <RouteLazy {...props} component={import("../components/home")} />
              )}
            />
          <Route
            path={RoutePath.topics}
            render={props => (
              <RouteLazy {...props} component={import("../components/topics")} />
            )}
          />
          <Route
            path={RoutePath.histtory}
            render={props => (
              <RouteLazy {...props} component={import("../components/history")} />
            )}
          />
          <Route
            path={RoutePath.count}
            render={props => (
              <RouteLazy {...props} component={import("../components/count")} />
            )}
          />
          <Route
            path={RoutePath.birds}
            render={props => (
              <RouteLazy {...props} component={import("../components/birds")} />
            )}
          />
          <Route
            path={RoutePath.about}
            render={props => (
              <RouteLazy {...props} component={import("../components/about")} />
            )}
          />
          <Route
              path={RoutePath.lazyRoute}
              render={props => (
                <RouteLazy {...props} component={import("../components/lazyRoute")} />
              )}
            />
           {/* <Route
              path={RoutePath.notFound}
              render={props => (
                <RouteLazy {...props} component={import("../components/notFound")} />
              )}
            /> */}
            <Route component={NotFound}/> 
         </Switch> 
        </div>
    );
  }
}

export default RouteComment;
