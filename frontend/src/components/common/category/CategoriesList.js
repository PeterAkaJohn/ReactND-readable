import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Category from './Category';

function CategoriesList(props) {
  return (
    <div className="content-row categories-row">
      {props.categories.map(category => (
        <div key={category.name} className="content-col category-col">
          <Link to={`/${category.path}`}>
            <Category category={category} />
          </Link>
        </div>
      ))}
    </div>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
