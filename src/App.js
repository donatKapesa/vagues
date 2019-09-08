import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Main from "./containers/Main/Main";
import SignInPage from "./containers/SignInPage/SignInPage";
import Aux from "./hoc/Aux/Aux";

class App extends Component {
  state = {
    accessToken: null
  };
  render() {
    var render = <SignInPage />;
    if (this.state.accessToken) {
      render = (
        <Aux>
          <Navbar />
          <Main />
        </Aux>
      );
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/" render={props => <div>{render}</div>} />
          {/* TODO: will have a component for catching unknown routes. That
          component will: re-direct to signin if accesstoken is null. otherwise
          to home */}
        </Switch>
      </div>
    );
  }
}

export default App;
