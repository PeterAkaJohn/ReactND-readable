import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../common/common_actions';

export default function withAddPostAction(WrappedComponent) {
  function WithAddPostAction(props) {
    return (
      <div>
        <WrappedComponent {...props} />
      </div>
    );
  }

  return connect(null, { createPost })(WithAddPostAction);
}
