import React, { Component } from "react";
import "./SignInPage.css";

class SignInPage extends Component {
  signInHandler = () => {
    console.log("this exectutes");
    // window.location = "http://localhost:8888/login";
    window.location = "https://vagues-backend.herokuapp.com/login";
    console.log("will go now");
  };

  render() {
    console.log(window);
    return (
      <div class="header">
        <div class="inner-header flex">
          <a
            onClick={this.signInHandler}
            class="waves-effect waves-light btn sign-in-button"
          >
            Sign in with Spotify
          </a>
        </div>
        <div>
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <div class="content flex">
          <p>&copy; Donat Kapesa | 2019</p>
        </div>
      </div>
    );
  }
}

export default SignInPage;
