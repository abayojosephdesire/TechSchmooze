import React, { useState } from "react";
import "./NewPostInput.css";
import { useNavigate } from "react-router-dom";
import { post } from "../../utilities";

// New order input
const NewPostInput = (props) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if a type is selected before proceeding
    if (!selectedType) {
      alert("Please select a type of your post before submitting.");
      return;
    }

    // Current time
    const currentDate = new Date().toISOString();

    // Conditionally call different functions based on the selected type
    if (selectedType === "sale") {
      props.onSaleSubmit && props.onSaleSubmit({ title, content, postDate: currentDate });
    } else if (selectedType === "order") {
      props.onOrderSubmit && props.onOrderSubmit({ title, content, postDate: currentDate });
    } else if (selectedType === "borrow") {
      props.onBorrowSubmit && props.onBorrowSubmit({ title, content, postDate: currentDate });
    } else if (selectedType === "giveaway") {
      props.onGiveAwaySubmit && props.onGiveAwaySubmit({ title, content, postDate: currentDate });
    }

    setContent("");
    setTitle("");
    setSelectedType("");
  };

  return (
    <div className="NewPostinput-container">
      <div className="Feed-title">
        <h2>Post</h2>
        <p>Empower your voice and share your needs, offerings, and events with our dynamic platform,
          providing you the opportunity to post orders, sales, events, and more.</p>
      </div>
      <input
        type="text"
        placeholder={props.defaultTitle}
        value={title}
        onChange={handleTitleChange}
        className="NewPostInput-title"
      />
      <textarea
        rows="10"
        placeholder={props.defaultBody}
        value={content}
        onChange={handleContentChange}
        className="NewPostInput-body"
      />
      <select className="NewPostInput-type" value={selectedType} onChange={handleTypeChange}>
        <option value="">Select Type</option>
        <option value="sale">Sale</option>
        <option value="order">Order</option>
        <option value="borrow">Borrow</option>
        <option value="giveaway">Give away</option>
      </select>
      <button
        type="submit"
        value="Submit"
        onClick={handleSubmit}
        className="NewPostInput-submit"
      >
        Post
      </button>
    </div>
  );
};

// New post
const NewPost = (props) => {
  const navigate = useNavigate();

  // Define different functions for each type
  const addSale = (body) => {
    post("/api/sale", body).then(() => {
      navigate("/sales/");
    });
  };

  const addOrder = (body) => {
    post("/api/order", body).then(() => {
      navigate("/orders/");
    });
  };

  const addBorrow = (body) => {
    post("/api/borrow", body).then(() => {
      navigate("/borrows/");
    });
  };

  const addGiveAway = (body) => {
    post("/api/giveaway", body).then(() => {
      navigate("/giveaways/");
    });
  };

  return (
    <NewPostInput
      defaultTitle="Title"
      defaultBody="Body text"
      onSaleSubmit={addSale}
      onOrderSubmit={addOrder}
      onBorrowSubmit={addBorrow}
      onGiveAwaySubmit={addGiveAway}
    />
  );
};

export { NewPost };
