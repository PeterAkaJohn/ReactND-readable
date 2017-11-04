import React from 'react';
import DisplayCategories from '../common/DisplayCategories';
import DisplayPosts from '../common/DisplayPosts';
import UserInteraction from '../common/UserInteraction';

function Home() {
  return (
    <div>
      <UserInteraction />
      <DisplayCategories />
      <DisplayPosts />
    </div>
  );
}

export default Home;
