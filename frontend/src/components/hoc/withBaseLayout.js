import React from 'react';

export default function withBaseLayout(WrappedComponent) {
  function WithBaseLayout(props) {
    return (
      <div>
        <div>
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  }

  return WithBaseLayout;
}
