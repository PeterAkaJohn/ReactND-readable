import React from 'react';
import PropTypes from 'prop-types';

function Category(props) {
  return <div>{props.category}</div>;
}

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
};

export default Category;
