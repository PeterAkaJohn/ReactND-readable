import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withAddPostAction from '../hoc/withAddPostAction';

class UserInteraction extends Component {
  constructor() {
    super();
    this.createPost = this.createPost.bind(this);
  }
  createPost() {
    const createPost = Promise.resolve(this.props.createPost());
    createPost.then(() => {
      this.props.history.push('/');
    });
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
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withAddPostAction(UserInteraction);
