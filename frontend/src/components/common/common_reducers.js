import { LOAD_POSTS, CREATE_POST, LOAD_CATEGORIES, GET_FILTERED_POSTS } from './common_actions';
import sortByFilter from '../../utils/helper';

export function postsReducer(state = [], action) {
  switch (action.type) {
    case LOAD_POSTS:
      return sortByFilter(action.payload);
    case CREATE_POST:
      return sortByFilter([...state, action.payload]);
    case GET_FILTERED_POSTS:
      return sortByFilter([...state], action.filter);
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
