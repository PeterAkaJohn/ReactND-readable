import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    return {
      categories: state.categories,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      loadCategories: () => {
        dispatch('LOADCATEGORIES');
      },
    };
  }

  WithCategories.propTypes = {
    loadCategories: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithCategories);
}
