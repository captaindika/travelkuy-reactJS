import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts, fetchDummy} from '../Redux/actions/postActions'
import propTypes from 'prop-types'


class TestPost extends Component {
  componentWillMount(){
    this.props.fetchPosts()
    this.props.fetchDummy()
    console.log(this.props.data)
    
  }

    // fetch('http://localhost:3030/user/schedule') 
    // .then(data => this.setState({posts: data}))
    // .then(data=>console.log(data))
  
  render() {
    // const postItems = this.props.posts.map(post => (
    //   <div key={post.id}>
    //     <h3>{post.title}</h3>
    //     <p>{post.body}</p>
    //   </div>
    // ))
    return (
      <>
      <h1>Tes</h1>
        {/* <div>
          <h1>post</h1>
          {postItems}
        </div> */}
      </>
    )
  }
}

TestPost.propTypes = {
  fetchPosts: propTypes.func.isRequired,
  fetchDummy: propTypes.func.isRequired,
  data: propTypes.array.isRequired,
  data1: propTypes.array.isRequired
  
}

const mapStateToProps = state => ({
  posts: state.posts,
  dummy: state.dummy
})



export default connect(mapStateToProps, { fetchPosts, fetchDummy })(TestPost)
