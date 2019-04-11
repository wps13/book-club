import React from "react";

import "./style.scss";

const CommentCreate = ({ changeState }) => {
  return (
    <div className="div-comment-create">
      <p>What are your thoughts about this book?</p>
      <textarea
        rows={5}
        onChange={e => changeState("message", e.target.value)}
        type="text"
        id="message-textarea"
      />
      <div className="div-rate-comment-create">
        <p>Rate It:</p>
        <select
          onChange={e => changeState("status", e.target.value)}
          id="select-comment-create"
        >
          <option value="Read It" className="option-comment-create">
            Read It
          </option>
          <option value="Want to read it" className="option-comment-create">
            Want to read it
          </option>
          <option
            value="Do not want to read it"
            className="option-comment-create"
          >
            Do not want to read it
          </option>
        </select>
      </div>
      <button
        type="button"
        id="btn-comment-create"
        onClick={() => changeState("showFormComment", false)}
      >
        Create Comment
      </button>
    </div>
  );
};

export default CommentCreate;
