import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../utilities";

const NewPostPressInput = (props) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Current time
    const currentDate = new Date().toISOString();
    props.onPressSubmit && props.onPressSubmit({
      title,
      content,
      postDate: currentDate,
    });

    setContent("");
    setTitle("");
  };

  return (
    <div className="NewPostInput-container">
      <div className="NewPostInput-message">
        <input
          type="text"
          placeholder={props.defaultTitle}
          value={title}
          onChange={handleTitleChange}
          className="NewPostInput-title"
        />
        <textarea
          rows="20"
          placeholder={props.defaultBody}
          value={content}
          onChange={handleContentChange}
          className="NewPostInput-body"
        />
        <button
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          className="NewPostDiscussionInput-submit NewPostInput-submit"
        >
          Add on press
        </button>
      </div>
    </div>
  );
};

// New post pree
const NewPostPress = (props) => {
  const navigate = useNavigate();
  const addPress = (body) => {
    post("/api/press", body).then(() => {
      navigate("/presses/");
    });
  };

  return (
    <NewPostPressInput
      defaultTitle="Title"
      defaultBody="Body text"
      onPressSubmit={addPress}
    />
  );
};

export { NewPostPress };
