// connect to store
import React from 'react';
import PropTypes from 'prop-types';
import withPost from '../hoc/withPost';

function PostDetail(props) {
  return <div>{props.post.title}</div>;
}

PostDetail.propTypes = {
  post: PropTypes.shape({ title: PropTypes.string }).isRequired,
};

export default withPost(PostDetail);
