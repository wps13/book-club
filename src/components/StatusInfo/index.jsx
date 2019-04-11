/* eslint-disable max-len */
import React from "react";

import "./style.scss";

const StatusInfo = ({ usersReadIt, usersWant, usersDontWant }) => {
  return (
    <div className="status-info">
      <p className="status-info-detail">{`${usersReadIt} Read it`}</p>
      <p className="status-info-detail">{`${usersWant} want to read it`}</p>
      <p className="status-info-detail">{`${usersDontWant} do not want to read it`}</p>
    </div>
  );
};

export default StatusInfo;
