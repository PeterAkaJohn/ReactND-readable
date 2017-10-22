import { LOAD_POST } from './detail_actions';

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_POST:
      return action.payload;
    default:
      return state;
  }
}
