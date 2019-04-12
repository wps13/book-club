import React from "react";

import { Link } from "react-router-dom";

import { MagnifyingGlass } from "../../utils/icons";
import "./style.scss";

const Header = () => {
  return (
    <div className="container-header">
      <div className="search-block-header">
        <input id="search-header" placeholder="Search a book" />
        <button type="button" id="btn-search">
          <MagnifyingGlass />
        </button>
      </div>
      <div className="right-block-header">
        <Link to="/">
          <span className="links-header">Home</span>
        </Link>
        <Link to="/signup">
          <span className="links-header">Join</span>
        </Link>
        <Link to="login">
          <span className="links-header">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
