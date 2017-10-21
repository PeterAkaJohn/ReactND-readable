import { LOAD_POSTS, LOAD_CATEGORIES } from './common_actions';

export function postsReducer(state = [], action) {
  switch (action.type) {
    case LOAD_POSTS:
      return action.payload;
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
