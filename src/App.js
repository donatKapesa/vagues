import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Posts from './containers/Posts/Posts';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Posts />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
