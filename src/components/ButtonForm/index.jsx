import React from "react";

import "./style.scss";

const ButtonForm = ({ text }) => {
  return (
    <div className="div-btn-form">
      <button type="submit" className="btn-form">
        <span className="span-btn-form">{text}</span>
      </button>
    </div>
  );
};

export default ButtonForm;
