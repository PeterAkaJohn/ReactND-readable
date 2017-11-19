// Connect to store
import React from 'react';
import PropTypes from 'prop-types';
import DisplayPosts from '../common/DisplayPosts';

function CategoryDetail(props) {
  return (
    <div>
      <DisplayPosts categoryId={props.match.params.category} />
    </div>
  );
}

CategoryDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ category: PropTypes.string }) }).isRequired,
};

export default CategoryDetail;
