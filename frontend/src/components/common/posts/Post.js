import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';

function Post(props) {
  return (
    <Card className="green accent-3" textClassName="white-text" title={props.post.title}>
      <div className="card-posts-score">{props.post.voteScore}</div>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.shape({ title: PropTypes.string, voteScore: PropTypes.number }).isRequired,
};

export default Post;
