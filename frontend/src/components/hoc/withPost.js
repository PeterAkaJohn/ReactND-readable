import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadPost } from '../detail/detail_actions';

export default function withPost(WrappedComponent) {
  class WithPost extends Component {
    componentDidMount() {
      this.props.loadPost(this.props.match.params.postId).then((post) => {
        if (!post.id) {
          this.props.history.push('/');
        }
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
      post: state.detail_post,
    };
  }

  WithPost.propTypes = {
    loadPost: PropTypes.func.isRequired,
    post: PropTypes.shape({ id: PropTypes.string }).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({ postId: PropTypes.string }) }).isRequired,
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  };

  return connect(mapStateToProps, {
    loadPost,
  })(WithPost);
}
