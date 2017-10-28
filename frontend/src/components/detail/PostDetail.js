// connect to store
import React from 'react';
import PropTypes from 'prop-types';
import withPost from '../hoc/withPost';

function PostDetail(props) {
  return (
    <div>
      <div>{props.post.title}</div>
      <ol>{props.post.comments && props.post.comments.map(comment => <li>{comment.body}</li>)}</ol>
    </div>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({ title: PropTypes.string, comments: PropTypes.array }).isRequired,
};

export default withPost(PostDetail);
