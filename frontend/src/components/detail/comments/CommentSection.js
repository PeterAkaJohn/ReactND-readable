// connect to store
import React from 'react';
import PropTypes from 'prop-types';
import './comment.css';
import withUserInteraction from '../../hoc/withUserInteraction';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';

function CommentSection(props) {
  return (
    <div className="comment-section">
      <div className="comment-section-header white-text">Comments</div>
      <div className="comments-number white-text">
        There are {props.post.comments && props.post.comments.length} comments for this post
      </div>
      <CommentForm {...props} />
      {props.post.comments && <CommentsList comments={props.post.comments} {...props} />}
    </div>
  );
}

CommentSection.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number,
    comments: PropTypes.array,
    id: PropTypes.string,
  }).isRequired,
  createComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
};

export default withUserInteraction(CommentSection);
