import React, { Component } from 'react'
import Footer from './component/Footer'
import {BrowserRouter} from 'react-router-dom'
import NavRoute from './page/NavRoute'

// for  redux
import {Provider} from 'react-redux'
import store from './Redux/store'

export default class App extends Component {
  render() {
    return (
      <>
      <Provider store={store().store}>
        <BrowserRouter>
          <NavRoute/>
        </BrowserRouter>       
          <Footer/>
      </Provider>
      </>
    )
  }
}
