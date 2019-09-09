import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Main from "./containers/Main/Main";
import SignInPage from "./containers/SignInPage/SignInPage";
import Aux from "./hoc/Aux/Aux";
import queryString from "query-string";

class App extends Component {
  state = {
    access_token: null,
    refresh_token: null,
    error: null
  };

  componentDidMount() {
    const queryString = require("query-string");
    let parsed = queryString.parse(window.location.search);
    console.log(parsed);
    this.setState({
        access_token: parsed.access_token,
        refresh_token: parsed.refresh_token
      }, () => {
        console.log(this.state);
      }
    );
  }

  render() {
    var render = <SignInPage />;
    if (this.state.access_token) {
      render = (
        <Aux>
          <Navbar />
          <Main access_token={this.state.access_token} />
        </Aux>
      );
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/" render={props => <div>{render}</div>} />

          {/* TODO: will have a component for catching unknown routes. That
          component will: re-direct to signin if access_token is null. otherwise
          to home */}
          
        </Switch>
      </div>
    );
  }
}

export default App;
