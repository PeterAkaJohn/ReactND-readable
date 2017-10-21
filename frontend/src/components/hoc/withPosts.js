import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadPosts } from '../common/common_actions';

export default function withPosts(WrappedComponent) {
  class WithPosts extends Component {
    componentDidMount() {
      if (this.props.categoryId.length > 0) {
        this.props.loadPosts(this.props.categoryId);
      } else {
        this.props.loadPosts();
      }
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

  WithPosts.propTypes = {
    loadPosts: PropTypes.func.isRequired,
    categoryId: PropTypes.string,
  };

  WithPosts.defaultProps = {
    categoryId: '',
  };

  return connect(mapStateToProps, { loadPosts })(WithPosts);
}
