import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Category from './Category';

function CategoriesList(props) {
  return (
    <div>
      {props.categories.map((category, index) => (
        <Link key={index} to={`/categories/${category.path}`}>
          <Category category={category} />
        </Link>
      ))}
    </div>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
