import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import combineReducers from './reducers/Index'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {}
const middleware = [thunk]

const store = createStore(
    combineReducers,
    initialState,
    composeWithDevTools( // here is for redux extension chrome
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )


export default store