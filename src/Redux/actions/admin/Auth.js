import Config from '../../../utils/Config'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const updateProfile = (data) => async dispatch => {
  const res = await axios.patch(Config.APP_BACKEND.concat(`user/update`), data, {headers: {'content-type': 'multipart/form-data'}})
  try {
    if (res) {
      dispatch({
        type: 'UPDATE_PROFILE'
      })
    } else {
      alert('failed to update profile')
    }
  } catch (err) {
    console.log(err)
  }
}

export const getProfileDetail = () => async dispatch => {
  const res = await axios.get(Config.APP_BACKEND.concat('user/detail'))
  try {
    dispatch({
      type: 'GET_USERDETAIL',
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const getUser = () => async dispatch => {
  const res = await axios.get(Config.APP_BACKEND.concat('auth/user'))
  try {
    if (res) {
      dispatch({
        type: 'USER',
        payload: res.data
      })
    } else {
      alert('user not found')
    }
  } catch (err) {
    console.log(err)
  }
}


