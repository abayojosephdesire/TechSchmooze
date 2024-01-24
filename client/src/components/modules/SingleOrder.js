import React from "react";
// import { Link } from "@reach/router";

const SingleOrder = (props) => {
  return (
    <div className="Card-container">
      <p className="Card-name">{props.creator_name}</p>
      <p className="Card-content">{props.content}</p>
    </div>
  );
};

export default SingleOrder;
