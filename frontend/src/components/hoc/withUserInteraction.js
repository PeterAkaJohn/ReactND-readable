import React from 'react';
import { connect } from 'react-redux';
import {
  createComment,
  editPost,
  deletePost,
  votePost,
  editComment,
  deleteComment,
  voteComment,
} from '../detail/detail_actions';

export default function withUserInteraction(WrappedComponent) {
  function WithUserInteraction(props) {
    return (
      <div>
        <WrappedComponent {...props} />
      </div>
    );
  }

  function mapStateToProps(state) {
    return {
      post: state.detail_post,
    };
  }

  return connect(mapStateToProps, {
    createComment,
    editPost,
    deletePost,
    votePost,
    editComment,
    deleteComment,
    voteComment,
  })(WithUserInteraction);
}
