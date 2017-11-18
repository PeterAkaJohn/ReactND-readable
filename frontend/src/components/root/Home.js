import React from 'react';
import DisplayCategories from '../common/DisplayCategories';
import DisplayPosts from '../common/DisplayPosts';

function Home() {
  return (
    <div className="home-section">
      <DisplayCategories />
      <DisplayPosts />
    </div>
  );
}

export default Home;
