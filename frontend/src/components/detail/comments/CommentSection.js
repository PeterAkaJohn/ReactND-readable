// connect to store
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withUserInteraction from '../../hoc/withUserInteraction';
import CommentsList from './CommentsList';

class CommentSection extends Component {
  constructor() {
    super();

    this.submitComment = this.submitComment.bind(this);
    this.editComment = this.editComment.bind(this);
  }
  submitComment() {
    this.props.createComment(this.props.post.id);
  }
  editComment(event) {
    this.props.editComment(event.target.id, 'hello bob');
  }

  render() {
    return (
      <div>
        {this.props.post.comments && (
          <CommentsList comments={this.props.post.comments} {...this.props} />
        )}
        <button onClick={this.submitComment}> create comment </button>
      </div>
    );
  }
}

CommentSection.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number,
    comments: PropTypes.array,
    id: PropTypes.string,
  }).isRequired,
  createComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
};

export default withUserInteraction(CommentSection);
