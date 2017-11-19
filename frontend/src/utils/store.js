import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { postsReducer, categoriesReducer } from '../components/common/common_reducers';
import postReducer from '../components/detail/detail_reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    categories: categoriesReducer,
    posts: postsReducer,
    detail_post: postReducer,
  }),
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
