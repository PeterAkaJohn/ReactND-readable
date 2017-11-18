// connect to store
import React from 'react';
import PropTypes from 'prop-types';
import PostsList from './posts/PostsList';
import PostFilter from './posts/PostFilter';
import withPosts from '../hoc/withPosts';

function DisplayPosts(props) {
  return (
    <div className="display-content display-posts">
      <div className="display-content-header">
        <div className="header">Posts</div>
        <PostFilter {...props} />
      </div>
      <div className="display-content-body">
        <PostsList posts={props.posts} />
      </div>
    </div>
  );
}

DisplayPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withPosts(DisplayPosts);
