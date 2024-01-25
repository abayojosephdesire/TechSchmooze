import React from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = (props) => {
  return (
    <div className="Card-container">
      <div className="Card-section Card-header">
        <p className="Card-profile">
          <span className="Card-picture"></span>
          <span className="Card-name">{props.creator_name}</span>
        </p>
        <p className="Card-date">{props.postDate}</p>
      </div>
      <div className="Card-section">
        <p className="Card-title">{props.title}</p>
        <p className="Card-content">{props.content}</p>
      </div>
      <div className="Card-section Card-footer">
        <button className="Card-comment">69 comments</button>
        <Link className="Card-message">Message</Link>
      </div>
    </div>
  );
};

export default SinglePost;
