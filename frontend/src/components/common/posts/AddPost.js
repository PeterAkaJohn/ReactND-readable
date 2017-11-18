import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Input, Button } from 'react-materialize';
import withCategories from '../../hoc/withCategories';
import withAddPostAction from '../../hoc/withAddPostAction';

class AddPost extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: '',
      author: '',
      category: '',
    };

    this.createPost = this.createPost.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
  }
  createPost(event) {
    event.preventDefault();
    const { title, body, author, category } = this.state;
    const postForm = {
      title,
      body,
      author,
      category,
    };
    if (
      !postForm ||
      !postForm.title ||
      !postForm.author ||
      !postForm.body ||
      !postForm.category ||
      postForm.title.length === 0 ||
      postForm.body.length === 0 ||
      postForm.category.length === 0 ||
      postForm.author.length === 0
    ) {
      return;
    }
    this.props.createPost(postForm).then((post) => {
      this.setState({ title: '', body: '', author: '', category: '' });
      this.props.history.push(`/posts/${post.id}`);
    });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  render() {
    return (
      <div className="section form-section">
        <div className="row">
          <form className="col s12" onSubmit={this.createPost}>
            <Row>
              <Input
                s={12}
                label="Title"
                value={this.state.title}
                onChange={this.handleTitleChange}
                labelClassName="white-text"
                className="white-text"
              />
              <div className="input-field col s12">
                <textarea
                  id="post-body"
                  className="materialize-textarea white-text"
                  data-length="120"
                  value={this.state.body}
                  onChange={this.handleBodyChange}
                />
                <label htmlFor="post-body" className="white-text">
                  Content
                </label>
              </div>
              <Input
                s={6}
                type="select"
                label="Category"
                value={this.state.category}
                onChange={this.handleCategoryChange}
                labelClassName="white-text"
                className="white-text"
              >
                {this.props.categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Input>
              <Input
                s={6}
                label="Author"
                value={this.state.author}
                onChange={this.handleAuthorChange}
                labelClassName="white-text"
                className="white-text"
              />
              <Button className="btn-submit-form" waves="light" type="submit">
                Add Post
              </Button>
            </Row>
          </form>
        </div>
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
