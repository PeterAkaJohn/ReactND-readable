import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadPosts, filterPosts, getCommentNumber } from '../common/common_actions';

export default function withPosts(WrappedComponent) {
  class WithPosts extends Component {
    componentDidMount() {
      if (this.props.categoryId.length > 0) {
        this.handlePostPromise(this.props.loadPosts(this.props.categoryId));
      } else {
        this.handlePostPromise(this.props.loadPosts());
      }
    }

    handlePostPromise(promise) {
      promise.then(() => {
        this.props.posts.forEach((post) => {
          this.props.getCommentNumber(post.id);
        });
      });
    }
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      posts: state.posts,
    };
  }

  WithPosts.propTypes = {
    getCommentNumber: PropTypes.func.isRequired,
    loadPosts: PropTypes.func.isRequired,
    categoryId: PropTypes.string,
    posts: PropTypes.shape({ forEach: PropTypes.func }).isRequired,
  };

  WithPosts.defaultProps = {
    categoryId: '',
  };

  return connect(mapStateToProps, { loadPosts, filterPosts, getCommentNumber })(WithPosts);
}
