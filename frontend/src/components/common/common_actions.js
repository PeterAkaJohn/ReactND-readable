import axios from 'axios';
import uuidv1 from 'uuid/v1';

export const BASE_URL = 'http://localhost:3001';

export const GET_FILTERED_POSTS = 'GET_FILTERED_POSTS';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const POST_COMMENT_NUMBER = 'POST_COMMENT_NUMBER';

export const CREATE_POST = 'CREATE_POST';

export function filterPosts(filter) {
  return {
    type: GET_FILTERED_POSTS,
    filter,
  };
}

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

  return dispatch =>
    request.then(
      ({ data }) => {
        dispatch(onLoadPostsSuccess(data));
      },
      error => console.log(error),
    );
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

  return dispatch =>
    request.then(
      ({ data }) => {
        dispatch(onLoadCategoriesSuccess(data));
      },
      error => console.log(error),
    );
}

function onCreatePostSuccess(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function createPost(postForm) {
  const newPost = {
    id: uuidv1(),
    timestamp: Date.now(),
    title: postForm.title,
    body: postForm.body,
    author: postForm.author,
    category: postForm.category,
  };
  const request = axios.post(buildPostsUrl(), newPost, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    request.then(
      ({ data }) => {
        dispatch(onCreatePostSuccess(data));
        return data;
      },
      error => console.log(error),
    );
}

function onGetCommentsNumber(comments, postId) {
  return {
    type: POST_COMMENT_NUMBER,
    payload: { commentsNumber: comments.length, postId },
  };
}

export function getCommentNumber(postId) {
  const request = axios.get(`${BASE_URL}/posts/${postId}/comments`, {
    headers: { Authorization: 'pierpaolo-iannone' },
  });

  return dispatch =>
    request.then(
      ({ data }) => {
        dispatch(onGetCommentsNumber(data, postId));
        return data;
      },
      error => console.log(error),
    );
}
