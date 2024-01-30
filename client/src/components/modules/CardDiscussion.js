import React, { useState, useEffect } from "react";
import SinglePostDiscussion from "./SinglePostDiscussion.js";
import { get } from "../../utilities";
import "./CardDiscussion.css";

// Change
const CardDiscussion = (props) => {
  return (
    <div>
      <SinglePostDiscussion
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        userId={props.userId}
        postDate={props.postDate}
        title={props.title}
        content={props.content}
        category={props.category}
        onClickMessage={props.onClickMessage}
      />
    </div>
  );
};
export default CardDiscussion;
