import React, { Component } from "react";
import "./SignInPage.css";

class SignInPage extends Component {
  signInHandler = () => {
    // this.props.signInSuccessful();
    console.log("this exectutes");
    window.location = "http://localhost:8888/login";
    // TO FIX. HOW DO I MAKE SURE THAT THIS EXECUTES ONLY IF USER SUCCESSFULLY SIGNS IN??
    console.log("will go now");
  };

  render() {
    console.log(window);
    return (
      <div className="SignInPage">
        <button onClick={this.signInHandler}>Sign in with Spotify</button>
      </div>
    );
  }
}

export default SignInPage;
