import {
  LOAD_POSTS,
  CREATE_POST,
  LOAD_CATEGORIES,
  GET_FILTERED_POSTS,
  POST_COMMENT_NUMBER,
} from './common_actions';
import { DELETE_POST, VOTE_POST } from '../detail/detail_actions';
import sortByFilter from '../../utils/helper';

export function postsReducer(state = [], action) {
  switch (action.type) {
    case LOAD_POSTS:
      return sortByFilter(action.payload);
    case CREATE_POST:
      return sortByFilter([...state, action.payload]);
    case GET_FILTERED_POSTS:
      return sortByFilter([...state], action.filter);
    case DELETE_POST:
      return sortByFilter(state.filter(post => post.id !== action.payload));
    case VOTE_POST:
      return sortByFilter(
        state.map((post) => {
          if (post.id === action.payload.id) {
            return { ...action.payload, commentsNumber: post.commentsNumber };
          }
          return post;
        }),
      );
    case POST_COMMENT_NUMBER:
      return sortByFilter(
        state.map((post) => {
          if (post.id === action.payload.postId) {
            return { ...post, commentsNumber: action.payload.commentsNumber };
          }
          return post;
        }),
      );
    default:
      return state;
  }
}

export function categoriesReducer(state = [], action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.payload.categories;
    default:
      return state;
  }
}
