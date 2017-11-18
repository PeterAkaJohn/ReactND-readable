import axios from 'axios';
import uuidv1 from 'uuid/v1';
import { BASE_URL } from '../common/common_actions';
import sortByFilter from '../../utils/helper';

export const LOAD_POST = 'LOAD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';

function buildPostUrl(postId) {
  return `${BASE_URL}/posts/${postId}`;
}

function buildCommentsUrl(postId) {
  return `${BASE_URL}/posts/${postId}/comments`;
}

function onLoadPostSuccess(post) {
  return {
    type: LOAD_POST,
    payload: post,
  };
}

export function loadPost(postId) {
  let postData = {};
  const postUrl = buildPostUrl(postId);
  const postRequest = axios.get(postUrl, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    postRequest
      .then(
        (result) => {
          postData = result.data;

          return axios.get(buildCommentsUrl(postId), {
            headers: { Authorization: 'pierpaolo-iannone' },
          });
        },
        error => console.log(error),
      )
      .then(
        (result) => {
          postData.comments = sortByFilter(result.data);
          dispatch(onLoadPostSuccess(postData));
        },
        error => console.log(error),
      );
}

function onEditPost(post) {
  return {
    type: EDIT_POST,
    payload: post,
  };
}

export function editPost(postId, postForm) {
  const postUrl = buildPostUrl(postId);
  const postRequest = axios.put(postUrl, postForm, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    postRequest.then(
      () => {
        dispatch(onEditPost(postForm));
      },
      error => console.log(error),
    );
}

function onDeletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId,
  };
}

export function deletePost(postId) {
  const postUrl = buildPostUrl(postId);
  const postRequest = axios.delete(postUrl, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    postRequest.then(
      () => {
        dispatch(onDeletePost(postId));
      },
      error => console.log(error),
    );
}

function onPostVoteSuccess(post) {
  return {
    type: VOTE_POST,
    payload: post,
  };
}

export function votePost(vote) {
  const postUrl = buildPostUrl(vote.postId);
  const request = axios.post(postUrl, vote, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    request.then(
      ({ data }) => {
        dispatch(onPostVoteSuccess(data));
      },
      error => console.log(error),
    );
}

function onCreateComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment,
  };
}

export function createComment(postId, commentForm) {
  const comment = {
    parentId: postId,
    body: commentForm.body,
    author: commentForm.author,
    timestamp: Date.now(),
    id: uuidv1(),
  };

  const request = axios.post(`${BASE_URL}/comments`, comment, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    request.then(
      ({ data }) => {
        dispatch(onCreateComment(data));
      },
      error => console.log(error),
    );
}

function onEditComment(comment) {
  return {
    type: EDIT_COMMENT,
    payload: comment,
  };
}

export function editComment(commentId, body) {
  const newComment = { body, timestamp: Date.now() };

  const request = axios.put(`${BASE_URL}/comments/${commentId}`, newComment, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    request.then(
      ({ data }) => {
        dispatch(onEditComment(data));
      },
      error => console.log(error),
    );
}

function onDeleteComment(commentId) {
  return {
    type: DELETE_COMMENT,
    payload: commentId,
  };
}

export function deleteComment(commentId) {
  const request = axios.delete(`${BASE_URL}/comments/${commentId}`, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    request.then(
      () => {
        dispatch(onDeleteComment(commentId));
      },
      error => console.log(error),
    );
}

function onCommentVoteSuccess(comment) {
  return {
    type: VOTE_COMMENT,
    payload: comment,
  };
}

export function voteComment(vote) {
  const request = axios.post(`${BASE_URL}/comments/${vote.commentId}`, vote, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    request.then(
      ({ data }) => {
        dispatch(onCommentVoteSuccess(data));
      },
      error => console.log(error),
    );
}
