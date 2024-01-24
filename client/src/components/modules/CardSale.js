import React, { useState, useEffect } from "react";
import SingleSale from "./SingleSale.js";
import { get } from "../../utilities";
import "./CardSale.css";

const CardSale = (props) => {
  return (
    <div>
      <SingleSale
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        content={props.content}
      />
    </div>
  );
};
export default CardSale;
