import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../utilities";
import "./NewPostDiscussionInput.css";

const NewPostDiscussionInput = (props) => {
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedCategory) {
      alert("Please select the category of your discussion");
      return;
    }

    // Current time
    const currentDate = new Date().toISOString();
    props.onDiscussionSubmit && props.onDiscussionSubmit({
      content,
      postDate: currentDate,
      category:selectedCategory,
    });

    setContent("");
    setSelectedCategory("");
  };

  return (
    <div className="NewPostInput-container">
      <div className="NewPostInput-filters">
        <div className="NewPostInput-filtersTitle">
          <h2>Discussion filters</h2>
        </div>
        <div className="NewPostInput-filtersItem">
          <label>Category</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="Academic">Academic</option>
            <option value="Events & activities">Events & activities</option>
            <option value="Hobbies & interests">Hobbies & interests</option>
            <option value="Campus life">Campus life</option>
            <option value="Technology & innovation">Technology & innovation</option>
            <option value="Career & internship">Career & internship</option>
            <option value="Health & wellness">Health & wellness</option>
            <option value="Travel & exploration">Travel & exploration</option>
            <option value="Community engagement">Community engagement</option>
            <option value="General discussion">General discussion</option>
          </select>
        </div>
      </div>
      <div className="NewPostInput-message">
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
          Add a discussion
        </button>
      </div>
    </div>
  );
};

// New post discussion
const NewPostDiscussion = (props) => {
  const navigate = useNavigate();
  const addDiscussion = (body) => {
    post("/api/discussion", body).then(() => {
      navigate("/discussions/");
    });
  };

  return (
    <NewPostDiscussionInput
      defaultBody="Body text"
      onDiscussionSubmit={addDiscussion}
    />
  );
};

export { NewPostDiscussion };
