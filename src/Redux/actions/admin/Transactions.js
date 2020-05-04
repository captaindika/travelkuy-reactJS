import Config from '../../../utils/Config'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const getTrans = () => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat('admin/transaction'))
    dispatch({
      type: 'GET_TRANS',
      payload: res.data
    })
    // console.log('data', res.data)
  } catch (error) {
    console.log(error)
  }
}