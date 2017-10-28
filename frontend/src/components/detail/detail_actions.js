import axios from 'axios';
import { BASE_URL } from '../common/common_actions';

export const LOAD_POST = 'LOAD_POST';

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

  return (dispatch) => {
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
          postData.comments = result.data;
          dispatch(onLoadPostSuccess(postData));
        },
        error => console.log(error),
      );
  };
}
