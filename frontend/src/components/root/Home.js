import React from 'react';
import { Link } from 'react-router-dom';
import DisplayCategories from '../common/DisplayCategories';
import DisplayPosts from '../common/DisplayPosts';

function Home() {
  return (
    <div>
      <Link to="/add">Add Post</Link>
      <DisplayCategories />
      <DisplayPosts />
    </div>
  );
}

export default Home;
