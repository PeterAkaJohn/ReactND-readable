import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditComment extends Component {
  constructor() {
    super();
    this.editComment = this.editComment.bind(this);
  }
  editComment(event) {
    const editComment = Promise.resolve(this.props.editComment(event.target.id, 'hello bob'));
    editComment.then(() => {
      this.props.history.push(`/posts/${this.props.post.id}`);
    });
  }

  render() {
    return (
      <div>
        EDITING COMMENT...
        <button id={this.props.comment.id} onClick={this.editComment}>
          EditComment
        </button>
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
