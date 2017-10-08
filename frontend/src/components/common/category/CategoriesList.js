import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Category from './Category';

function CategoriesList(props) {
  return (
    <div>
      {props.categories.map(category => (
        <Link to={`/categories/${category.id}`}>
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
