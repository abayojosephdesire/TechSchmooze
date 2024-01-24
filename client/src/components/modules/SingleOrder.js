import React from "react";
// import { Link } from "@reach/router";

const SingleOrder = (props) => {
  return (
    <div>
      <p>{props.creator_name}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default SingleOrder;
