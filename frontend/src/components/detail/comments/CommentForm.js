import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Button } from 'react-materialize';

class CommentForm extends Component {
  constructor() {
    super();

    this.state = {
      body: '',
      author: '',
    };

    this.submitComment = this.submitComment.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
  }
  submitComment(event) {
    event.preventDefault();
    const { body, author } = this.state;
    const commentForm = {
      body,
      author,
    };
    if (commentForm.body.length === 0 || commentForm.author.length === 0) {
      return;
    }
    this.props.createComment(this.props.post.id, commentForm).then(() => {
      this.setState({ body: '', author: '' });
    });
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  render() {
    return (
      <div className="comment-form">
        <Row>
          <Col s={8} offset="s2">
            <form className="col s12" onSubmit={this.submitComment}>
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
                <Input
                  s={12}
                  label="Author"
                  value={this.state.author}
                  onChange={this.handleAuthorChange}
                  labelClassName="white-text"
                  className="white-text"
                />
                <Button className="btn-submit-form" waves="light" type="submit">
                  Add Comment
                </Button>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

CommentForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  createComment: PropTypes.func.isRequired,
};

export default CommentForm;
