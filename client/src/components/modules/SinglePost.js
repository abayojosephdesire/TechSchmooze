import React from "react";
import "./SinglePost.css";

const SinglePost = (props) => {
  return (
    <div>
      <div className="SinglePost-section SinglePost-header">
        <p className="SinglePost-profile">
          <span className="SinglePost-picture"></span>
          <span className="SinglePost-name">{props.creator_name}</span>
        </p>
        <p className="SinglePost-date">{props.postDate}</p>
      </div>
      <div className="SinglePost-section SinglePost-main">
        <p className="SinglePost-filtersList">
          <span>Type: {props.type}</span>
          <span>Category: {props.category}</span>
          <span>Condition: {props.condition}</span>
          <span>Price: ${props.price}</span>
        </p>
        <p className="SinglePost-title">{props.title}</p>
        <p className="SinglePost-content">{props.content}</p>
      </div>
    </div>
  );
};

export default SinglePost;
