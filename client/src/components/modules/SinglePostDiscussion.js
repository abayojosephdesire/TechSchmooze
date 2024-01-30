import React from "react";
import { useNavigate } from "react-router-dom";
import "./SinglePostDiscussion.css";

const SinglePostDiscussion = (props) => {
  const navigate = useNavigate();
  const handleJoinClick = () => {
    const discussionId = props._id;
    const content = encodeURIComponent(props.content);
    navigate(`/discussionMessages?discussionId=${discussionId}&content=${content}`);
  };
  return (
    <div className="SinglePostDiscussion-container">
      <div className="SinglePostDiscussion-main">
        <p className="SinglePostDiscussion-category">{props.category}</p>
        <p className="SinglePostDiscussion-content">{props.content}</p>
      </div>
      <div className="SinglePostDiscussion-linkContainer">
        <button className="SinglePostDiscussion-button" onClick={handleJoinClick}>Join</button>
      </div>
    </div>
  );
};

export default SinglePostDiscussion;
