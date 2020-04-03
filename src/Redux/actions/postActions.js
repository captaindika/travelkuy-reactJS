import { FETCH_POSTS, NEW_POST, FETCH_DUMMY } from './types'
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

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POST,
      payload: post
      }))
  
}