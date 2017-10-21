import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import withStore from './hoc/withStore';
import Home from './root/Home';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default withStore(App);
