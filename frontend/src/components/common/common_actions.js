import axios from 'axios';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

function onLoadPostsSuccess(posts) {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
}

export function loadPosts(categoryId) {
  const request = axios.get('http://localhost:3001/posts', {
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
