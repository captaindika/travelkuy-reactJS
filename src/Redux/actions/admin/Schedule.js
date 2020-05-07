import Config from '../../../utils/Config'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const showSchedule = (page, searchKey, search, sortKey, sort) => async dispatch => {
  try {
   const res = await axios.get(Config.APP_BACKEND.concat(`admin/schedule?page=${page}&search[key]=${searchKey || 'routes.end'}&search[value]=${search || ''}&sort[key]=${sortKey || 'schedules.id'}&sort[value]=${sort}`))
   dispatch({
     type : 'GET_SCHEDULE' ,
     payload: res.data
   })

   
  } catch (error) {
    console.log(error)
  }
}