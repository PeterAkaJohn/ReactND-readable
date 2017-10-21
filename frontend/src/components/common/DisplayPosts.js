// connect to store
import React from 'react';
import PropTypes from 'prop-types';
import PostsList from './posts/PostsList';
import withPosts from '../hoc/withPosts';

function DisplayPosts(props) {
  return (
    <div>
      <PostsList posts={props.posts} />
    </div>
  );
}

DisplayPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withPosts(DisplayPosts);
