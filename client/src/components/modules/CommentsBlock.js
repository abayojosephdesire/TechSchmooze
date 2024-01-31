import React, { useState, useEffect } from "react";
import SingleComment from "./SingleComment.js";
import { NewComment } from "./NewCommentInput.js";
import { useNavigate } from "react-router-dom";
import "./CommentsBlock.css";

const CommentsBlock = (props) => {
  const [showComments, setShowComments] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };
  const handleAddComment = () => {
    setShowComments(true);
  };
  const navigate = useNavigate();
  useEffect(() => {
    setCommentCount(props.comments.length);
  }, [props.comments]);

  const handleMessageClick = () => {
    const recipientUserId = props.market.creator_id;
    const recipientUserName = props.market.creator_name;
    const defaultMessageText = encodeURIComponent("Hey there, I am interested in your " + props.market.type + " titled: " + props.market.title + ". How can I get it?");
    navigate(`/messages?recipientId=${recipientUserId}&recipientName=${recipientUserName}&defaultMessageText=${defaultMessageText}`);

  };
  return (
    <div className="CommentsBlock-container">
      <div className="CommentsBlock-title">
        <div className="CommentsBlock-titleComments">
          <button
            className="CommentsBlock-commentButton"
            onClick={toggleComments}
          >
            {`${commentCount} Comments`}
          </button>
        </div>
        <div className="CommentsBlock-titleInput">
          {props.userId && (
            <NewComment marketId={props.market._id} addNewComment={props.addNewComment} onAddComment={handleAddComment} />
          )}
        </div>
        <div className="CommentsBlock-titleMessage">
          <button className="CommentsBlock-message" onClick={handleMessageClick}>Message</button>
        </div>
      </div>
      {showComments && (
        <div className="CommentsBlock-list">
          {props.comments.slice().reverse().map((comment) => (
            <SingleComment
              key={`SingleComment_${comment._id}`}
              _id={comment._id}
              creator_name={comment.creator_name}
              creator_id={comment.creator_id}
              content={comment.content}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsBlock;
