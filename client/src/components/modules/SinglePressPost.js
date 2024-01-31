import React from "react";
import "./SinglePressPost.css";

const SinglePressPost = (props) => {
  return (
    <div className="SinglePressPost-container">
        <p className="SinglePost-title">{props.title}</p>
        <p className="SinglePost-content">{props.content}</p>
    </div>
  );
};

export default SinglePressPost;
