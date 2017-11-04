import { LOAD_POSTS, CREATE_POST, LOAD_CATEGORIES } from './common_actions';
import sortByVoteScore from '../../utils/helper';

export function postsReducer(state = [], action) {
  switch (action.type) {
    case LOAD_POSTS:
      return sortByVoteScore(action.payload);
    case CREATE_POST:
      return sortByVoteScore([...state, action.payload]);
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
