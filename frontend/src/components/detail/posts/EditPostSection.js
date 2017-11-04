// Connect to store
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withUserInteraction from '../../hoc/withUserInteraction';

class EditPostSection extends Component {
  constructor() {
    super();

    this.editPost = this.editPost.bind(this);
  }

  editPost() {
    this.props.editPost(this.props.post.id);
    this.props.history.push(`/posts/${this.props.post.id}`);
  }
  render() {
    return (
      <div>
        EDITING...
        <button onClick={this.editPost}>Edit</button>
      </div>
    );
  }
}

EditPostSection.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number,
    comments: PropTypes.array,
    id: PropTypes.string,
  }).isRequired,
  editPost: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withUserInteraction(EditPostSection);
