import React, { Component } from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {createPost} from '../Redux/actions/postActions'


class PostForm extends Component {
  state = {
    name: '',
    age: 0,
    salary: 0
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      age: this.state.age,
      salary: this.state.salary
    }
    // if (this.state.name && this.state.age && this.state.salary) {
      this.props.createPost(data);
      this.handleReset();
      console.log(data.name, data.age, data.salary)
      this.props.
      console.log(this.props.posts)
    // }
  }

  handleReset = () => {
    this.setState({
      name: '',
      age: 0,
      salary: 0
    });
  };

  render() {
    return (
      <>
       <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              onChange={ this.handleInputChange }
              value={ this.state.name }
            />
          </div>
          <div className="form-group">
            <input
                type="number"
                placeholder="Age"
                className="form-control"
                name="age"
                onChange={ this.handleInputChange }
                value={ this.state.age }
              />
          </div>
          <div>
            <input
                type="number"
                placeholder="Salary"
                className="form-control"
                name="salary"
                onChange={ this.handleInputChange }
                value={ this.state.salary }
              />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Post</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    posts : state.posts
    }
  }

export default connect(
  mapStateToProps, {createPost}
  
)(PostForm);

// export default connect(null, { createPost })(PostForm)
