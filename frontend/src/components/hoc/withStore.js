import React from 'react';
import { Provider } from 'react-redux';
import store from '../../utils/store';

export default function withStore(WrappedComponent) {
  function WithStore(props) {
    return (
      <Provider store={store}>
        <div>
          <WrappedComponent {...props} />
        </div>
      </Provider>
    );
  }
  return WithStore;
}
