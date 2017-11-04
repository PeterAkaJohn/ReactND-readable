import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withPostAction from '../hoc/withPostAction';

class UserInteraction extends Component {
  constructor() {
    super();
    this.createPost = this.createPost.bind(this);
  }
  createPost() {
    this.props.createPost();
  }
  render() {
    return (
      <div>
        <button onClick={this.createPost}>Add Post</button>
      </div>
    );
  }
}

UserInteraction.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default withPostAction(UserInteraction);
