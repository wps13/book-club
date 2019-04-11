import React from "react";

import "./style.scss";

const BookInfo = ({ title, image, description }) => {
  return (
    <div className="book-info">
      <img src={image} alt="Book img" className="book-info-img" />
      <div className="book-info-text">
        <p className="book-info-title">{title}</p>
        <p className="book-info-description">{description}</p>
      </div>
    </div>
  );
};

export default BookInfo;
