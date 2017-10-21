// connect to store
import React from 'react';
import PropTypes from 'prop-types';
import CategoriesList from './category/CategoriesList';
import withCategories from '../hoc/withCategories';

function DisplayCategories(props) {
  return (
    <div>
      <CategoriesList categories={props.categories} />
    </div>
  );
}

DisplayCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withCategories(DisplayCategories);
