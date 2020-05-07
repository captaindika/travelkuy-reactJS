import isLogin from './isLogin'
import { combineReducers } from 'redux'
import Busses from './Admin/Busses'
import Routes from './Admin/Routes'
import Schedules from './Admin/Schedules'
import Transactions from './Admin/Transaction'
import Agent from './Admin/Agent'
import Profile from './Admin/Auth'


const allReducers = combineReducers({
  isLogin, Busses, Routes, Schedules, Transactions, Agent, Profile
})

export default allReducers