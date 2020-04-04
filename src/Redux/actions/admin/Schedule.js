import Config from '../../../utils/Config'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const showSchedule = () => async dispatch => {
  try {
   const res = await axios.get(Config.APP_BACKEND.concat('admin/schedule'))
   dispatch({
     type : 'GET_SCHEDULE' ,
     payload: res.data
   })

   
  } catch (error) {
    console.log(error)
  }
}