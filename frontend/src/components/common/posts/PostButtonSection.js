import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import withUserInteraction from '../../hoc/withUserInteraction';

class PostButtonSection extends Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);
    this.upVotePost = this.upVotePost.bind(this);
    this.downVotePost = this.downVotePost.bind(this);
  }

  deletePost(e) {
    e.preventDefault();
    this.props.deletePost(this.props.selectedPost.id);
  }
  upVotePost(e) {
    e.preventDefault();
    const vote = {
      option: 'upVote',
      postId: this.props.selectedPost.id,
    };

    this.props.votePost(vote);
  }
  downVotePost(e) {
    e.preventDefault();
    const vote = {
      option: 'downVote',
      postId: this.props.selectedPost.id,
    };

    this.props.votePost(vote);
  }
  render() {
    return (
      <div className="post-buttons-section">
        <div role="presentation" onClick={this.deletePost} className="delete-icon">
          <Icon>clear</Icon>
        </div>
        <div className="post-card-ctas">
          <Link to={`/${this.props.selectedPost.category}/${this.props.selectedPost.id}/edit`}>
            <Button>
              <Icon>build</Icon>
            </Button>
          </Link>
          <Button onClick={this.upVotePost}>
            <Icon>thumb_up</Icon>
          </Button>
          <Button onClick={this.downVotePost}>
            <Icon>thumb_down</Icon>
          </Button>
        </div>
      </div>
    );
  }
}

PostButtonSection.propTypes = {
  selectedPost: PropTypes.shape({ id: PropTypes.string, category: PropTypes.string }).isRequired,
  deletePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
};

export default withUserInteraction(PostButtonSection);
