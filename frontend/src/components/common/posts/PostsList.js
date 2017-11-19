import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Post from './Post';

function PostsList(props) {
  return (
    <div className="content-row posts-row">
      {props.posts.map(post => (
        <div key={post.id} className="content-col post-col">
          <Link to={`/${post.category}/${post.id}`}>
            <Post post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostsList;
