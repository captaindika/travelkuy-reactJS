import isLogin from './isLogin'
import { combineReducers } from 'redux'
import Busses from './Admin/Busses'
import Routes from './Admin/Routes'
import Schedules from './Admin/Schedules'
import Transactions from './Admin/Transaction'


const allReducers = combineReducers({
  isLogin, Busses, Routes, Schedules, Transactions
})

export default allReducers