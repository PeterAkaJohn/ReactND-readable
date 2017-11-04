// connect to store
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import withPost from '../hoc/withPost';
import PostSection from './posts/PostSection';
import EditPostSection from './posts/EditPostSection';
import CommentSection from './comments/CommentSection';

function PostDetail(props) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path={`${props.match.url}/edit`}
          render={() => <EditPostSection {...props} />}
        />
        <Route path={`${props.match.url}/`} render={() => <PostSection {...props} />} />
      </Switch>
      <CommentSection {...props} />
    </div>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.number,
    comments: PropTypes.array,
    id: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default withPost(PostDetail);
