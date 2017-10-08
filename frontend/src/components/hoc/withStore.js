import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore();

export default function withStore(WrappedComponent) {
  function WithStore(props) {
    return (
      <Provider store={store}>
        <WrappedComponent {...props} />;
      </Provider>
    );
  }
  return WithStore;
}
