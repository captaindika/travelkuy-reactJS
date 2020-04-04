import { FETCH_POSTS, NEW_POST, FETCH_DUMMY, ADD_POST } from './types'
import axios from 'axios'

export const fetchPosts = () => dispatch => {
  return axios.get('http://localhost:3030/user/schedule')
      .then(posts => {
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      })
      .catch(error => {
        throw(error);
      })
}

// export const fetchDummy = () => dispatch => {
//   fetch ('http://localhost:3030/user/schedule')
//   .then(res => res.json())
//   .then(dummy => 
//     dispatch({
//       type: FETCH_DUMMY,
//       payload: dummy
//     }))
// }

export const fetchDummy = () => dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(dummy => {
        dispatch({
          type: FETCH_DUMMY,
          payload: dummy
        })
      })
      .catch(error => {
        throw(error);
      })
  }

// export const createPost = (postData) => dispatch => {
//   fetch('http://dummy.restapiexample.com/api/v1/create', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(postData)
//     })
//     .then(res => res.json())
//     .then(post => dispatch({
//       type: NEW_POST,
//       payload: post
//       }))
  
// }

export const createPost = (data) => async (dispatch) => {
  console.log('create-post')
    try {
      const result = await axios.post('http://dummy.restapiexample.com/api/v1/create', data)
      if(result) {
        console.log('success')
      } else {
        console.log('fail')
      }
      dispatch({
        type: ADD_POST,
        payload: result.data.data
      })
    } catch(error) {
        console.log(error)
    }
      
  }


export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {
      data
    }
  }
};