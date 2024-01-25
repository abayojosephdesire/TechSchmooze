import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost.js";
import { get } from "../../utilities";

// Change
const Card = (props) => {
  return (
    <div>
      <SinglePost
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        postDate={props.postDate}
        title={props.title}
        content={props.content}
      />
    </div>
  );
};
export default Card;
