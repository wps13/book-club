import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./style.scss";

const bookIMG = "../../public/images/black-bg.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <p id="title-home">Welcome to the Book Club!</p>
        <div className="container-info-home">
          <div className="block-info-home">
            <p className="info-home">New Here?</p>
            <Link to="/signup">
              <p>Join Us</p>
            </Link>
          </div>
          <div className="block-info-home">
            <p className="info-home">Already here?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="recent-book-home">
          <p className="desc-recent-home">Recently registered books</p>
          <Link to="/book">
            <img src={bookIMG} alt="book img" className="book-img-home" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
