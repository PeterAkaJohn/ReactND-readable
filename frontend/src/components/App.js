import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import withStore from './hoc/withStore';
import Home from './root/Home';
import CategoryDetail from './detail/CategoryDetail';
import PostDetail from './detail/PostDetail';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/categories/:id" component={CategoryDetail} exact />
            <Route path="/posts/:id" component={PostDetail} exact />
          </div>
        </Router>
      </div>
    );
  }
}

export default withStore(App);
