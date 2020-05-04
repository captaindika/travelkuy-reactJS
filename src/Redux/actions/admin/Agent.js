import Config from '../../../utils/Config'

import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`


export const GetDataAgent = () => async dispatch => {
  const res = await axios.get(Config.APP_BACKEND.concat('admin/agent'))
  try {
    dispatch({
      type: 'GET_AGENT',
      payload: res.data
    })
    // console.log('Agent: ', res)
  } catch (error) {
    console.log(error)
  }
}