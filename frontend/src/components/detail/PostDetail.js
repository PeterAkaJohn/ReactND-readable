// connect to store
import React from 'react';
import PropTypes from 'prop-types';
import withPost from '../hoc/withPost';
import PostSection from './posts/PostSection';
import CommentSection from './comments/CommentSection';

function PostDetail(props) {
  return (
    <div>
      <PostSection {...props} />
      <CommentSection {...props} />
    </div>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number,
    comments: PropTypes.array,
    id: PropTypes.string,
  }).isRequired,
};

export default withPost(PostDetail);
