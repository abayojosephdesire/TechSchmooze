import React, { useState, useEffect } from "react";
import SinglePressPost from "./SinglePressPost.js";
import { get } from "../../utilities";
import "./Card.css";

// Change
const CardPress = (props) => {
  return (
    <div>
      <SinglePressPost
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        userId={props.userId}
        postDate={props.postDate}
        type={props.type}
        title={props.title}
        content={props.content}
      />
    </div>
  );
};
export default CardPress;
