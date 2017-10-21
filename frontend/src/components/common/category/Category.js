import React from 'react';
import PropTypes from 'prop-types';

function Category(props) {
  return <div>{props.category.name}</div>;
}

Category.propTypes = {
  category: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

export default Category;
