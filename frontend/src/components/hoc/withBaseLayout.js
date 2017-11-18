import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CustomNavbar from '../common/CustomNavbar';

export default function withBaseLayout(WrappedComponent) {
  function WithBaseLayout(props) {
    return (
      <div>
        <Router>
          <div>
            <CustomNavbar {...props} />
            <WrappedComponent {...props} />
          </div>
        </Router>
      </div>
    );
  }

  return WithBaseLayout;
}
