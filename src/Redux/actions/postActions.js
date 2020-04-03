import { FETCH_POSTS, NEW_POST, FETCH_DUMMY } from './types'

export const fetchPosts = () => dispatch => {
  // console.log('fetch')
  // fetch('https://jsonplaceholder.typicode.com/posts')
  fetch('http://localhost:3030/user/schedule')
  .then(res => res.json())
  .then(posts => 
    dispatch({
    type: FETCH_POSTS,
    payload: posts
    })
  ) 
}

export const fetchDummy = () => dispatch => {
  fetch ('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(dummy => 
    dispatch({
      type: FETCH_DUMMY,
      payload: dummy
    }))
}

export const createPost = (postData) => dispatch => {
  console.log('success')
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