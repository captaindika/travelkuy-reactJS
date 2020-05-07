import Config from '../../../utils/Config'
import history from '../../../utils/History'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`


export const GetDataAgent = () => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat('admin/agent'))

    dispatch({
      type: 'GET_AGENT',
      payload: res.data 
    })
  } catch (error) {
    console.log(error)
  }
}

export const addBus = (data) => async dispatch => {
  try {
    const res = await axios.post(Config.APP_BACKEND.concat('admin/bus/add'), data)
    if (res) {
      dispatch({
        type: 'ADD_BUS',
        payload: res.data
      })
      alert('Add buss successfull')
      history.push('/car')
    } else {
      alert('failed to add buss')
    }
  } catch(err) {
    console.log(err)
  }
}

export const getBus = ()=> async dispatch => {
  const endPoint = Config.APP_BACKEND.concat('admin/bus')
  try {
    const res = await axios.get(endPoint)
    dispatch({
      type : 'GET_BUSSES',
      payload : res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getTotalBus = ()=> async dispatch => {
  const endPoint = Config.APP_BACKEND.concat('admin/total-bus')
  try {
    const res = await axios.get(endPoint)
    dispatch({
      type : 'GET_TOTALBUSSES',
      payload : res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteBus = (id) => async dispatch => {
  try {
    const res = await axios.delete(Config.APP_BACKEND.concat(`admin/bus/delete/${id}`))
    if(res) {
      alert('ok')
    } else {
      alert('fail delete')
    }
    dispatch({
      type:'DELETE_BUSSES',
      payload:res.data
    })
  } catch (error) {
    console.log(error)
  }
}