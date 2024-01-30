import React, { useState } from "react";
import { post } from "../../utilities";
import "./NewCommentInput.css";

const NewCommentInput = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
    props.onAddComment && props.onAddComment();
  };

  return (
    <div className="NewCommentInput-container">
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewCommentInput-input"
      />
      <button
        type="submit"
        className="NewCommentInput-submit"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};

const NewComment = (props) => {
  const addComment = (value) => {
    const body = { parent: props.marketId, content: value };
    post("/api/comment", body).then((comment) => {
      props.addNewComment(comment);
    });
  };

  return <NewCommentInput defaultText="Add Comment" onSubmit={addComment} onAddComment={props.onAddComment} />;
};

export { NewComment };
