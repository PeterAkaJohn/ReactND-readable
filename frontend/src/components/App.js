import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/add" component={AddPost} exact />
            <Route path="/:category" component={CategoryDetail} exact />
            <Route path="/:category/:postId" component={PostDetail} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withStore(withBaseLayout(App));
