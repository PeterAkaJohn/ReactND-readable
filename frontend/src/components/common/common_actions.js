import axios from 'axios';

export const BASE_URL = 'http://localhost:3001';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

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
