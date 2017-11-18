import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'react-materialize';

class Comment extends Component {
  constructor() {
    super();

    this.deleteComment = this.deleteComment.bind(this);
    this.upVoteComment = this.upVoteComment.bind(this);
    this.downVoteComment = this.downVoteComment.bind(this);
  }
  deleteComment() {
    this.props.deleteComment(this.props.comment.id);
  }
  upVoteComment() {
    const vote = {
      option: 'upVote',
      commentId: this.props.comment.id,
    };

    this.props.voteComment(vote);
  }
  downVoteComment() {
    const vote = {
      option: 'downVote',
      commentId: this.props.comment.id,
    };

    this.props.voteComment(vote);
  }
  render() {
    return (
      <div className="comment-content">
        <div className="comment-body-section">
          <div className="comment-body">{this.props.comment.body}</div>
          <div className="comment-score">{this.props.comment.voteScore}</div>
        </div>
        <div className="comment-author">{this.props.comment.author}</div>
        <div className="comment-cta-section">
          <div className="comment-perma-cta">
            <Link to={`${this.props.match.url}/comments/${this.props.comment.id}`}>
              <Button>
                <Icon>build</Icon>
              </Button>
            </Link>
            <Button onClick={this.deleteComment}>
              <Icon>clear</Icon>
            </Button>
          </div>
          <div className="comment-voting-cta">
            <Button onClick={this.upVoteComment}>
              <Icon>thumb_up</Icon>
            </Button>
            <Button onClick={this.downVoteComment}>
              <Icon>thumb_down</Icon>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number,
    author: PropTypes.string,
  }).isRequired,
  deleteComment: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default Comment;
