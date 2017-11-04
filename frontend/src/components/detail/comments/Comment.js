import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Comment extends Component {
  constructor() {
    super();

    this.deleteComment = this.deleteComment.bind(this);
    this.upVoteComment = this.upVoteComment.bind(this);
    this.downVoteComment = this.downVoteComment.bind(this);
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
        {this.props.comment.body}
        <Link to={`${this.props.match.url}/comments/${this.props.comment.id}`}> edit comment </Link>
        <button id={this.props.comment.id} onClick={this.deleteComment}>
          deleteComment
        </button>
        <button id={this.props.comment.id} onClick={this.upVoteComment}>
          upVoteComment
        </button>
        <button id={this.props.comment.id} onClick={this.downVoteComment}>
          downVoteComment
        </button>
        <div>{this.props.comment.voteScore}</div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number,
  }).isRequired,
  deleteComment: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default Comment;
