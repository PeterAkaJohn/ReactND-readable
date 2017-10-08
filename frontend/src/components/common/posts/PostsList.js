import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Post from './Post';

function PostsList(props) {
  return (
    <div>
      {props.posts.map(post => (
        <Link to={`/posts/${post.id}`}>
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostsList;
