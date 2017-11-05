import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import withStore from './hoc/withStore';
import Home from './root/Home';
import CategoryDetail from './detail/CategoryDetail';
import PostDetail from './detail/PostDetail';
import AddPost from './common/posts/AddPost';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/add" component={AddPost} />
            <Route path="/categories/:id" component={CategoryDetail} />
            <Route path="/posts/:id" component={PostDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default withStore(App);
