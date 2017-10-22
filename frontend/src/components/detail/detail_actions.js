import axios from 'axios';
import { BASE_URL } from '../common/common_actions';

export const LOAD_POST = 'LOAD_POST';

function buildPostUrl(postId) {
  return `${BASE_URL}/posts/${postId}`;
}

function onLoadPostSuccess(post) {
  return {
    type: LOAD_POST,
    payload: post,
  };
}

export function loadPost(postId) {
  const url = buildPostUrl(postId);
  const request = axios.get(url, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return (dispatch) => {
    request.then(
      ({ data }) => {
        dispatch(onLoadPostSuccess(data));
      },
      error => console.log(error),
    );
  };
}
