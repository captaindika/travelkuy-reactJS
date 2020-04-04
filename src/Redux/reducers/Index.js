import isLogin from './isLogin'
import { combineReducers } from 'redux'
import Busses from './Admin/Busses'
import Routes from './Admin/Routes'

const allReducers = combineReducers({
  isLogin, Busses, Routes
})

export default allReducers