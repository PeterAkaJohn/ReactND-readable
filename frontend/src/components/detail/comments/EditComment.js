import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Row } from 'react-materialize';

class EditComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: props.comment.body,
    };

    this.editComment = this.editComment.bind(this);

    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  editComment(event) {
    event.preventDefault();
    const { body } = this.state;
    if (!body || body.length === 0) {
      this.props.history.push(`/posts/${this.props.post.id}`);
      return;
    }
    this.props.editComment(this.props.comment.id, body).then(() => {
      this.setState({ body: '' });
      this.props.history.push(`/posts/${this.props.post.id}`);
    });
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  render() {
    return (
      <div className="row row-edit-comment">
        <form onSubmit={this.editComment}>
          <Row>
            <div className="input-field col s12">
              <textarea
                id="post-body"
                className="materialize-textarea white-text"
                data-length="120"
                value={this.state.body}
                onChange={this.handleBodyChange}
              />
              <label htmlFor="post-body" className="white-text">
                Comment
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

EditComment.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  comment: PropTypes.shape({
    id: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  editComment: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default EditComment;
