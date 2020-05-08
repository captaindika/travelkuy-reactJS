import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import Bus from './Bus/Bus'
import Routes from './Route/Route'
import Schedule from './Schedule/Schedule'
import Transaction from './Transaction'
import Notfound from './Notfound'
import Login from './Login'
import history from '../utils/History'
import {Router, Switch, Route} from 'react-router-dom'

class NavRoute extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')) {
      history.push('/dashboard')
      return (
        <div>
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
        </div>
      )
    } else {
      history.push('/')
      return (
        <div>
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
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NavRoute)
