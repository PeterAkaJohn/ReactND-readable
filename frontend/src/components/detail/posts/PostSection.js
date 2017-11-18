import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'react-materialize';
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
  upVotePost() {
    const vote = {
      option: 'upVote',
      postId: this.props.post.id,
    };

    this.props.votePost(vote);
  }
  downVotePost() {
    const vote = {
      option: 'downVote',
      postId: this.props.post.id,
    };

    this.props.votePost(vote);
  }
  render() {
    return (
      <div className="post-detail-container">
        <div className="post-detail-title-section">
          <div className="post-detail-title">{this.props.post.title}</div>
          <div className="post-detail-score">{this.props.post.voteScore}</div>
        </div>
        <div className="post-detail-body">{this.props.post.body}</div>
        <div className="post-detail-author">{this.props.post.author}</div>
        <div className="post-detail-cta-section">
          <div className="post-detail-ctas">
            <div className="post-detail-permanent-action">
              <Link to={`/posts/${this.props.post.id}/edit`}>
                <Button>
                  <Icon>build</Icon>
                </Button>
              </Link>
              <Button onClick={this.deletePost}>
                <Icon>clear</Icon>
              </Button>
            </div>
            <div className="post-detail-vote">
              <Button onClick={this.upVotePost}>
                <Icon>thumb_up</Icon>
              </Button>
              <Button onClick={this.downVotePost}>
                <Icon>thumb_down</Icon>
              </Button>
            </div>
          </div>
        </div>
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
    author: PropTypes.string,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withUserInteraction(PostSection);
