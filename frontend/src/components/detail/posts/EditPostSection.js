// Connect to store
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Input } from 'react-materialize';
import withUserInteraction from '../../hoc/withUserInteraction';

class EditPostSection extends Component {
  constructor(props) {
    super();

    this.editPost = this.editPost.bind(this);

    this.state = {
      title: props.post.title,
      body: props.post.body,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  editPost(event) {
    event.preventDefault();
    const { title, body } = this.state;
    const postForm = {
      title,
      body,
    };
    if (
      !postForm ||
      !postForm.title ||
      !postForm.body ||
      postForm.title.length === 0 ||
      postForm.body.length === 0
    ) {
      this.props.history.push(`/posts/${this.props.post.id}`);
      return;
    }
    this.props.editPost(this.props.post.id, postForm).then(() => {
      this.setState({ title: '', body: '', author: '' });
      this.props.history.push(`/posts/${this.props.post.id}`);
    });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  render() {
    return (
      <div className="edit-post-container">
        <form onSubmit={this.editPost}>
          <Row>
            <Input
              s={12}
              label="Title"
              value={this.state.title}
              onChange={this.handleTitleChange}
              labelClassName="black-text"
            />
            <div className="input-field col s12">
              <textarea
                id="post-body"
                className="materialize-textarea"
                data-length="120"
                value={this.state.body}
                onChange={this.handleBodyChange}
              />
              <label htmlFor="post-body" className="black-text">
                Content
              </label>
            </div>
            <Button className="btn-submit-form" waves="light" type="submit">
              Edit
            </Button>
          </Row>
        </form>
      </div>
    );
  }
}

EditPostSection.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number,
    comments: PropTypes.array,
    author: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  editPost: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withUserInteraction(EditPostSection);
