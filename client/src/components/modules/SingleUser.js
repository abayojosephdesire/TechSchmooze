import React, { useState, useEffect } from "react";
import "./SingleUser.css";

const SingleUser = (props) => {
  const isActive = props.active ? "active" : "";
  return (
    <div
      className={`SingleUser-container ${isActive}`}
      onClick={() => {
        props.setActiveUser(props.user);
      }}
    >
      {props.user.name}
    </div>
  );
}

export default SingleUser;
