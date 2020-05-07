import Config from '../../../utils/Config'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const showRoutes = (page, searchKey, search, sortKey, sort) => async dispatch => {
  try {
    console.log(search)
   const res = await axios.get(Config.APP_BACKEND.concat(`admin/route?page=${page}&search[${searchKey || 'end'}]=${search || ''}&sort[${sortKey || 'id'}]=${parseInt(sort)}`))
   dispatch({
     type : 'GET_ROUTES' ,
     payload: res.data
   })

   
  } catch (error) {
    console.log(error)
  }
}

export const deleteRoutes = (id) => async dispatch => {
  try {
    const res = await axios.delete(Config.APP_BACKEND.concat(`admin/route/delete/${id}`))
    if(res) {
      dispatch({
        type: `DELETE_ROUTES`,
        payload: res.data
      })
      alert('Delete success')
    } else {
      alert('fail delete')
    }  
  } catch (error) {
    console.log(error)
  }
}

export const CreateRoutes = (data) => async dispatch => {
  try{
    const res = await axios.post(Config.APP_BACKEND.concat(`admin/route/add`), data)
    if(res) {
      dispatch({
        type: 'ADD_ROUTES',
        payload:res.data
      })
      alert ('add routes success')
    } else {
      alert('failed')
    }
  } catch (error) {
    console.log(error)
  }
}

export const UpdateRoutes = (id, data) => async dispatch => {
  try{
    const res = await axios.patch(Config.APP_BACKEND.concat(`admin/route/update/${id}`), data)
    if (res) {
      dispatch({
        type: 'UPDATE_ROUTES',
        payload:res.data
      })
      alert('update success')
    } else {
      alert('failed')
    }
  } catch (error) {
    console.log(error)
  }
}