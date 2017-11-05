import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserInteraction from '../UserInteraction';
import withCategories from '../../hoc/withCategories';

class AddPost extends Component {
  constructor() {
    super();

    this.createPost = this.createPost.bind(this);
  }
  createPost() {
    return this;
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.categories &&
            this.props.categories.map(category => <li key={category.name}>{category.name}</li>)}
        </ul>
        <UserInteraction {...this.props} />
      </div>
    );
  }
}

AddPost.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withCategories(AddPost);
