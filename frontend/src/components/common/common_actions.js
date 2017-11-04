import axios from 'axios';
import uuidv1 from 'uuid/v1';

export const BASE_URL = 'http://localhost:3001';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const CREATE_POST = 'CREATE_POST';

function buildPostsUrl(categoryId) {
  let url = `${BASE_URL}/posts`;
  if (categoryId) {
    url = `${BASE_URL}/${categoryId}/posts`;
  }
  return url;
}

function onLoadPostsSuccess(posts) {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
}

export function loadPosts(categoryId) {
  const url = buildPostsUrl(categoryId);
  const request = axios.get(url, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return (dispatch) => {
    request.then(
      ({ data }) => {
        dispatch(onLoadPostsSuccess(data));
      },
      error => console.log(error),
    );
  };
}

function onLoadCategoriesSuccess(categories) {
  return {
    type: LOAD_CATEGORIES,
    payload: categories,
  };
}

export function loadCategories() {
  const request = axios.get('http://localhost:3001/categories', {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return (dispatch) => {
    request.then(
      ({ data }) => {
        dispatch(onLoadCategoriesSuccess(data));
      },
      error => console.log(error),
    );
  };
}

function onCreatePostSuccess(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function createPost() {
  const newPost = {
    id: uuidv1(),
    timestamp: Date.now(),
    title: 'HELLO BOB',
    body: 'hello bobby',
    author: 'bob',
    category: 'react',
  };
  const request = axios.post(buildPostsUrl(), newPost, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return (dispatch) => {
    request.then(
      ({ data }) => {
        dispatch(onCreatePostSuccess(data));
      },
      error => console.log(error),
    );
  };
}
