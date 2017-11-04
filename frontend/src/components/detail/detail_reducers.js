import {
  LOAD_POST,
  CREATE_COMMENT,
  EDIT_POST,
  VOTE_POST,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
  VOTE_COMMENT,
} from './detail_actions';
import sortByVoteScore from '../../utils/helper';

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_POST:
      return action.payload;
    case CREATE_COMMENT:
      return {
        ...state,
        comments: sortByVoteScore([...state.comments, action.payload]),
      };
    case EDIT_POST:
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body,
      };
    case DELETE_POST:
      return {};
    case VOTE_POST:
      return Object.assign({}, state, action.payload);
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return action.payload;
          }

          return comment;
        }),
      };
    case VOTE_COMMENT:
      return {
        ...state,
        comments: sortByVoteScore(
          state.comments.map((comment) => {
            if (comment.id === action.payload.id) {
              return action.payload;
            }
            return comment;
          }),
        ),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload),
      };
    default:
      return state;
  }
}
