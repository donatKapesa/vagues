import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import Posts from './containers/Posts/Posts';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Posts />
      </div>
    );
  }
}

export default App;
