import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withUserInteraction from '../../hoc/withUserInteraction';

class PostSection extends Component {
  constructor() {
    super();

    this.deletePost = this.deletePost.bind(this);
    this.upVotePost = this.upVotePost.bind(this);
    this.downVotePost = this.downVotePost.bind(this);
  }
  deletePost() {
    this.props.deletePost(this.props.post.id).then(() => {
      this.props.history.push('/');
    });
  }
  upVotePost(event) {
    const vote = {
      option: 'upVote',
      postId: event.target.id,
    };

    this.props.votePost(vote);
  }
  downVotePost(event) {
    const vote = {
      option: 'downVote',
      postId: event.target.id,
    };

    this.props.votePost(vote);
  }
  render() {
    return (
      <div>
        <div>{this.props.post.title}</div>
        <div>{this.props.post.body}</div>
        <div>{this.props.post.voteScore}</div>
        <Link to={`/posts/${this.props.post.id}/edit`}>Edit</Link>
        <button onClick={this.deletePost}>Delete</button>
        <button id={this.props.post.id} onClick={this.upVotePost}>
          upVotePost
        </button>
        <button id={this.props.post.id} onClick={this.downVotePost}>
          downVotePost
        </button>
      </div>
    );
  }
}

PostSection.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number,
    comments: PropTypes.array,
    id: PropTypes.string,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withUserInteraction(PostSection);
