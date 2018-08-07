import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    // NOTE the square brakets [] !!! will not work without
    this.setState({[event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    // Moved. replaced by call action below: fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data));

    // call action:
    this.props.createPost(post);
  }



  render() {

    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br/>
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
          </div>
          <br/>
          <div>
            <label>Body: </label><br/>
            <textarea name="body" value={this.state.body} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
