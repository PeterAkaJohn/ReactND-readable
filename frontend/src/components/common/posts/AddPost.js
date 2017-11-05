import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withCategories from '../../hoc/withCategories';
import withAddPostAction from '../../hoc/withAddPostAction';

class AddPost extends Component {
  constructor() {
    super();

    this.createPost = this.createPost.bind(this);
  }
  createPost() {
    this.props.createPost().then((post) => {
      this.props.history.push(`/posts/${post.id}`);
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.categories &&
            this.props.categories.map(category => <li key={category.name}>{category.name}</li>)}
        </ul>
        <button onClick={this.createPost}>Add Post</button>
      </div>
    );
  }
}

AddPost.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  createPost: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withAddPostAction(withCategories(AddPost));
