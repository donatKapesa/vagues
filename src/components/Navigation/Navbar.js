import React from "react";
import "./Navbar.css";
import SearchBar from "../UI/SearchBar/SearchBar";
import Headroom from "react-headroom";

const navbar = ({ signout }) => (
  <Headroom
    style={{
      webkitTransition: "all .5s ease-in-out",
      mozTransition: "all .5s ease-in-out",
      oTransition: "all .5s ease-in-out",
      transition: "all .5s ease-in-out"
    }}
  >
    <nav className="navbar navbar-light bg-light">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          {/* <a className="navbar-brand" href="#tohome">
            To top
          </a> */}
        </div>
        {/* <div>
          <form className="form-inline">
            <div className="input-group">
              <SearchBar
                name="main-search-bar"
                id="search-bar"
                type="text"
                className="form-control"
                placeholder="Search..."
                ariaLabel="Username"
                ariaDescribedby="basic-addon1"
              />
            </div>
          </form>
        </div> */}
        <div className="logo logo-top">Vagues</div>
        <div
          onClick={signout}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <a>Sign Out</a>
        </div>
      </div>
    </nav>
  </Headroom>
);

export default navbar;
