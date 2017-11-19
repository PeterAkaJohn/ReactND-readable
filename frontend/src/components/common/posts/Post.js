import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';
import PostButtonSection from './PostButtonSection';

function Post(props) {
  return (
    <Card className="green accent-3" textClassName="white-text" title={props.post.title}>
      <div className="card-posts-score">{props.post.voteScore}</div>
      {props.post.commentsNumber >= 0 && (
        <div className="card-posts-comments">Replies: {props.post.commentsNumber}</div>
      )}
      <PostButtonSection selectedPost={props.post} />
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    voteScore: PropTypes.number,
    commentsNumber: PropTypes.number,
  }).isRequired,
};

export default Post;
