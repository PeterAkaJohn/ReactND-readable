import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return <div>{props.post.title}</div>;
}

Post.propTypes = {
  post: PropTypes.shape({ title: PropTypes.string }).isRequired,
};

export default Post;
