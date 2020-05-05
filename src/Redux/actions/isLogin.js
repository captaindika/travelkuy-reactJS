import Config from '../../utils/Config'
import history from '../../utils/History'
import axios from 'axios'


 export const setLogin = (data) => async dispatch => {
  try {
    const infoLogin = await axios.post(Config.APP_BACKEND.concat('admin/login'), data)
    if(infoLogin.data.success === true) {
      localStorage.setItem('token', infoLogin.data.token)
      dispatch({
        type: 'IS_LOGIN',
        payload: infoLogin.data
      })
      alert('Login success...')
      history.push('/dashboard')
    } else {
      alert('Login failed....')
      dispatch({
        type: 'IS_LOGOUT',
        payload: infoLogin.data
      })
      history.push('/')
    }
  } catch (err) {
    console.log(err)
  }
}
  
 
 export const setLogout = (e) => dispatch => {
   if (localStorage.getItem('token')) {
     localStorage.removeItem('token')
     history.push('/')
     dispatch({
      type: 'IS_LOGOUT'
    })
   } else {
     history.push('/')
   }
   

 }