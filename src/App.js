import React, { Component } from 'react'
import Footer from './component/Footer'
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom'
import history from './utils/History'
// page
import Login from './page/Login'
import Bus from './page/Bus/Bus'
import Routes from './page/Route'
import Schedule from './page/Schedule'
import Dashboard from './page/Dashboard'
import Transaction from './page/Transaction'
import Notfound from './page/Notfound'
import Navbar from './component/Navbar'

// for  redux
import {Provider} from 'react-redux'
import store from './Redux/store'

export default class App extends Component {
  render() {
    return (
      <>
      <Provider store={store().store}>
        <BrowserRouter>
          <Router history={history}>
            <Switch>
              <Route path='/' exact component={Login}/>
              <Route path='/dashboard' exact render={(props) => <Dashboard {...props}/>}/>
              <Route path='/car' exact render={(props) => <Bus {...props}/>}/>
              <Route path='/route' exact render={(props) => <Routes {...props}/>}/>
              <Route path='/schedule' exact render={(props) => <Schedule {...props}/>}/>
              <Route path='/transaction' exact render={(props) => <Transaction {...props}/>} />
              <Route component={Notfound}/>
            </Switch>
          </Router>
        </BrowserRouter>       
          <Footer/>
      </Provider>
      </>
    )
  }
}
