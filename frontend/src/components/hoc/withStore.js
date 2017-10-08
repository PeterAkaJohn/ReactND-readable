import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      });
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    reducer,
  }),
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
