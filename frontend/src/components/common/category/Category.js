import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';

function Category(props) {
  return (
    <Card
      className="cyan accent-3 card-category"
      textClassName="white-text"
      title={props.category.name}
    />
  );
}

Category.propTypes = {
  category: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

export default Category;
