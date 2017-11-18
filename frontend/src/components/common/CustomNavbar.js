import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

function CustomNavbar() {
  return (
    <Navbar
      className="deep-purple accent-2"
      brand={
        <div>
          <Link to="/">
            <Icon>arrow_back</Icon>
          </Link>
        </div>
      }
      fixed
      right
    >
      <li>
        <Link to="/add">Create Post</Link>
      </li>
    </Navbar>
  );
}

export default CustomNavbar;
