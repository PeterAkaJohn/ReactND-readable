import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { postsReducer, categoriesReducer } from '../common/common_reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    categories: categoriesReducer,
    posts: postsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default function withStore(WrappedComponent) {
  function WithStore(props) {
    return (
      <Provider store={store}>
        <div>
          <WrappedComponent {...props} />;
        </div>
      </Provider>
    );
  }
  return WithStore;
}
