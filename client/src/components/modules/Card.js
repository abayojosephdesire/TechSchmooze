import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost.js";
import CommentsBlock from "./CommentsBlock.js";
import { get } from "../../utilities";
import "./Card.css";

// Change
const Card = (props) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    get("/api/comment", { parent: props._id }).then((comments) => {
      setComments(comments);
    });
  }, []);
  const addNewComment = (commentObj) => {
    setComments(comments.concat([commentObj]));
  };
  return (
    <div className="Card-container">
      <SinglePost
        _id={props._id}
        creator_name={props.creator_name}
        creator_id={props.creator_id}
        userId={props.userId}
        postDate={props.postDate}
        type={props.type}
        title={props.title}
        content={props.content}
        category={props.category}
        condition={props.condition}
        price={props.price}
        file={props.file}
        onClickMessage={props.onClickMessage}
      />
      <CommentsBlock
        market={props}
        comments={comments}
        creator_id={props.creator_id}
        userId={props.userId}
        addNewComment={addNewComment}
      />
    </div>
  );
};
export default Card;
