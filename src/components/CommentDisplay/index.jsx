import React from "react";

import "./style.scss";

const CommentDisplay = ({ username, commentText, imageLink, status }) => {
  return (
    <div className="div-comment-display">
      <div>
        <img src={imageLink} alt="User Img." className="img-comment-display" />
        <p>{status}</p>
      </div>

      <div className="info-comment-display">
        <h3>{username}</h3>
        <p>{commentText}</p>
      </div>
    </div>
  );
};

export default CommentDisplay;
