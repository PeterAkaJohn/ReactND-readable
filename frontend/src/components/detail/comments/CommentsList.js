import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Comment from './Comment';
import EditComment from './EditComment';

function CommentsList(props) {
  return (
    <div className="comment-section-list">
      {props.comments &&
        props.comments.map(comment => (
          <div className="comment-item-container" key={comment.id}>
            <Switch>
              <Route
                exact
                path={`${props.match.url}/comments/:commentId`}
                render={({ match }) => {
                  if (match.params.commentId === comment.id) {
                    return <EditComment comment={comment} {...props} />;
                  }
                  return <Comment comment={comment} {...props} />;
                }}
              />
              <Route
                path={`${props.match.url}/`}
                render={() => <Comment comment={comment} {...props} />}
              />
            </Switch>
          </div>
        ))}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default CommentsList;
