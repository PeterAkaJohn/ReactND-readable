import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './common/common.css';
import withStore from './hoc/withStore';
import withBaseLayout from './hoc/withBaseLayout';
import Home from './root/Home';
import CategoryDetail from './detail/CategoryDetail';
import PostDetail from './detail/PostDetail';
import AddPost from './common/posts/AddPost';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="main-container">
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddPost} />
          <Route path="/categories/:id" component={CategoryDetail} />
          <Route path="/posts/:id" component={PostDetail} />
        </div>
      </div>
    );
  }
}

export default withStore(withBaseLayout(App));
