import React, { useState, useEffect, useRef } from "react";
import { post } from "../../utilities";
import "./NewDiscussionMessageInput.css";

const NewDiscussionMessageInput = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };

  return (
    <div className="NewDiscussionMessageInput-container">
      <input
        className="NewDiscussionMessageInput-input"
        type="text"
        value={value}
        placeholder="Write here"
        onChange={handleChange}
      />
      <button
        className="NewDiscussionMessageInput-button"
        type="submit"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
};

const NewDiscussionMessage = (props) => {
  const sendDiscussionMessage = (value) => {
    const body = { discussionId: props.discussionId, content: value };
    post("/api/discussionMessage", body);
  };

  return <NewDiscussionMessageInput onSubmit={sendDiscussionMessage} />;
}

export { NewDiscussionMessage };
