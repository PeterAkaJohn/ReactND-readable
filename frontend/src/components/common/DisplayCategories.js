// connect to store
import React from 'react';
import PropTypes from 'prop-types';
import CategoriesList from './category/CategoriesList';
import withCategories from '../hoc/withCategories';

function DisplayCategories(props) {
  return (
    <div className="display-content display-categories">
      <div className="display-content-header">Categories</div>
      <div className="display-content-body">
        <CategoriesList categories={props.categories} />
      </div>
    </div>
  );
}

DisplayCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withCategories(DisplayCategories);
