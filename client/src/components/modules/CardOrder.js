import React, { useState, useEffect } from "react";
import SingleOrder from "./SingleOrder.js";
import { get } from "../../utilities";
import "./CardOrder.css";

// Changes
const CardOrder = (props) => {
  return (
    <div>
      <SingleOrder
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        content={props.content}
      />
    </div>
  );
};
export default CardOrder;
