import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function withPosts(WrappedComponent) {
  class WithPosts extends Component {
    componentDidMount() {
      this.props.loadPosts();
    }
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />;
        </div>
      );
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
      posts: ownProps.categoryId ? state.catPosts : state.posts,
    };
  }

  function mapDispatchToProps(dispatch, ownProps) {
    return {
      loadPosts: () =>
        (ownProps.categoryId ? dispatch('LOADPOSTSCATEGORY') : dispatch('LOADPOSTS')),
    };
  }

  WithPosts.propTypes = {
    loadPosts: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithPosts);
}
