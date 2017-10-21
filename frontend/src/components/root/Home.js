import React from 'react';
import DisplayCategories from '../common/DisplayCategories';
import DisplayPosts from '../common/DisplayPosts';

function Home() {
  return (
    <div>
      <DisplayCategories />
      <DisplayPosts />
    </div>
  );
}

export default Home;
