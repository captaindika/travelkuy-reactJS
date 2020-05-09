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

export const addSchedule = (data) => async dispatch => {
  try {
    const res = await axios.post(Config.APP_BACKEND.concat('admin/schedule/add'), data)
    console.log('ini res',res)
    if (res) {
      dispatch({
        type:'ADD_SCHEDULE',
        payload: res.data
      })
      alert('create schedule success')
    }
  }catch (err) {
    alert('cannot create schedule')
  }
}

export const deleteSchedule = (id) => async dispatch => {
  try {
    const res = await axios.delete(Config.APP_BACKEND.concat(`admin/schedule/delete/${id}`))
    if (res) {
      dispatch({
        type:'DELETE_SCHEDULE',
        payload: res.data
      })
      alert('schedule deleted')
    } else {
      alert('Failed to delete')
    }
  } catch(err) {
    alert(err)
  }
}

export const updateSchedule = (id, data) => async dispatch => {
  try {
    const res = await axios.patch(Config.APP_BACKEND.concat(`admin/schedule/update/${id}`), data)
    console.log('ini res', res)
    if (res) {
      dispatch({
        type: 'UPDATE_SCHEDULE',
        payload: res.data
      })
      alert('Schedule updated !')
    } else {
      alert('Failed to update')
    }
  } catch (err) {
    alert(err)
  }
}