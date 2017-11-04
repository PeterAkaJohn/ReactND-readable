import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../common/common_actions';

export default function withPostAction(WrappedComponent) {
  function WithPostAction(props) {
    return (
      <div>
        <WrappedComponent {...props} />
      </div>
    );
  }

  return connect(null, { createPost })(WithPostAction);
}
