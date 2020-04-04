import isLogin from './isLogin'
import { combineReducers } from 'redux'
import Busses from './Admin/Busses'
import Routes from './Admin/Routes'
import Schedules from './Admin/Schedules'


const allReducers = combineReducers({
  isLogin, Busses, Routes, Schedules
})

export default allReducers