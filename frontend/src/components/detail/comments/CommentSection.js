// connect to store
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withUserInteraction from '../../hoc/withUserInteraction';

class CommentSection extends Component {
  constructor() {
    super();

    this.submitComment = this.submitComment.bind(this);
    this.editComment = this.editComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.upVoteComment = this.upVoteComment.bind(this);
    this.downVoteComment = this.downVoteComment.bind(this);
  }
  submitComment() {
    this.props.createComment(this.props.post.id);
  }
  editComment(event) {
    this.props.editComment(event.target.id, 'hello bob');
  }
  deleteComment(event) {
    this.props.deleteComment(event.target.id);
  }
  upVoteComment(event) {
    const vote = {
      option: 'upVote',
      commentId: event.target.id,
    };

    this.props.voteComment(vote);
  }
  downVoteComment(event) {
    const vote = {
      option: 'downVote',
      commentId: event.target.id,
    };

    this.props.voteComment(vote);
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.post.comments &&
            this.props.post.comments.map(comment => (
              <li key={comment.id}>
                {comment.body}
                <button id={comment.id} onClick={this.editComment}>
                  edit comment
                </button>
                <button id={comment.id} onClick={this.deleteComment}>
                  deleteComment
                </button>
                <button id={comment.id} onClick={this.upVoteComment}>
                  upVoteComment
                </button>
                <button id={comment.id} onClick={this.downVoteComment}>
                  downVoteComment
                </button>
                <div>{comment.voteScore}</div>
              </li>
            ))}
        </ol>

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
