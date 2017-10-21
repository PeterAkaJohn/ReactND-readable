import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCategories } from '../common/common_actions';

export default function withCategories(WrappedComponent) {
  class WithCategories extends Component {
    componentDidMount() {
      this.props.loadCategories();
    }
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />;
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    console.log(state);
    return {
      categories: state.categories,
    };
  }

  WithCategories.propTypes = {
    loadCategories: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, { loadCategories })(WithCategories);
}
