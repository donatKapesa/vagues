import React from 'react';
import './Navbar.css';
import SearchBar from '../UI/SearchBar/SearchBar';

const navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#tohome">
                {/* <img src={logo} width="30" height="30" alt=""></img> */}
            </a>
            <form id="search-form" className="form-inline">
                <div className="input-group">
                    <SearchBar
                        name="main-search-bar"
                        id="search-bar"
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        ariaLabel="Username"
                        ariaDescribedby="basic-addon1" />
                </div>
            </form>
        </div>
    </nav>
);

export default navbar