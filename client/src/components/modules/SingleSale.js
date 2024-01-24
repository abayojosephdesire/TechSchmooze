import React from "react";
// import { Link } from "@reach/router";

const SingleSale = (props) => {
  return (
    <div className="Card-container">
      <p className="Card-name">{props.creator_name}</p>
      <p className="Card-content">{props.content}</p>
    </div>
  );
};

export default SingleSale;
