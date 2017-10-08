import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return <div>{props.post}</div>;
}

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default Post;
