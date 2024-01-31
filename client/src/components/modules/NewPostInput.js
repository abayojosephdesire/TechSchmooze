import React, { useState } from "react";
import "./NewPostInput.css";
import { useNavigate } from "react-router-dom";
import { post } from "../../utilities";
import FileBase64 from "react-file-base64";

const NewPostInput = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [file, setFile] = useState(undefined);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleConditionChange = (event) => {
    setSelectedCondition(event.target.value);
  };
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedImage(file);
  // };
  // const handleUpload = ({ base64 }) => { console.log("handling upload!"); };

  const handleUpload = (event) => {
    console.log(event);
    event.preventDefault();

    if (file === undefined) {
      console.warn("Uploading file with no file set...");
      return;
    }
    const currentDate = new Date().toISOString();
    const formData = new FormData();
    const imageBlob = new Blob([file], { type: "text/plain" });
    formData.append("file", imageBlob);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("postDate", currentDate);
    formData.append("type", selectedType);
    formData.append("category", selectedCategory);
    formData.append("condition", selectedCondition);
    formData.append("price", selectedPrice);
    console.log("adding market");
    fetch("/api/market", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error uploading profile picture:", error);
      });


    if (!selectedType || !selectedCategory || !selectedCondition || !selectedPrice) {
      alert("Please select all the post filters.");
      return;
    }

    // Current time

    // props.onMarketSubmit && props.onMarketSubmit({
    //   title,
    //   content,
    //   postDate: currentDate,
    //   type:selectedType,
    //   category:selectedCategory,
    //   condition:selectedCondition,
    //   price:selectedPrice,
    //   file:file,
    // });

    setTitle("");
    setContent("");
    setSelectedType("");
    setSelectedCategory("");
    setSelectedCondition("");
    setSelectedPrice("");
    setFile(undefined);
  };

  return (
    <div className="NewPostInput-container">
      <div className="NewPostInput-filters">
        <div className="NewPostInput-filtersTitle">
          <h2>Post filters</h2>
        </div>
        <div className="NewPostInput-filtersItem">
          <label>Type</label>
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="">Select Type</option>
            <option value="Sale">Sale</option>
            <option value="Order">Order</option>
            <option value="Borrow">Borrow</option>
            <option value="Share">Share</option>
            <option value="Give away">Give away</option>
          </select>
        </div>
        <div className="NewPostInput-filtersItem">
          <label>Category</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="Academics">Academics</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Ticket">Ticket</option>
            <option value="Art">Art</option>
            <option value="Transportation">Transportation</option>
          </select>
        </div>
        <div className="NewPostInput-filtersItem">
          <label>Condition</label>
          <select value={selectedCondition} onChange={handleConditionChange}>
            <option value="">Select Category</option>
            <option value="Excellent">Excellent</option>
            <option value="Fair">Fair</option>
            <option value="Bad">Bad</option>
          </select>
        </div>
        <div className="NewPostInput-filtersItem">
          <label>Price range</label>
          <select value={selectedPrice} onChange={handlePriceChange}>
            <option value="">Select Price</option>
            <option value="< 10">&lt; 10</option>
            <option value="10 - 30">10 - 30</option>
            <option value="30 - 60">30 - 60</option>
            <option value="60 - 100">60 - 100</option>
            <option value="100 - 500">100 - 500</option>
            <option value="500 - 1000">500 - 1000</option>
            <option value="> 1000">&gt; 1000</option>
          </select>
        </div>
      </div>
      <div className="NewPostInput-message">
        <input
          type="text"
          placeholder={props.defaultTitle}
          value={title}
          onChange={handleTitleChange}
          className="NewPostInput-title"
        />
        {/* <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="NewPostInput-imageInput"
        /> */}
        <FileBase64 type="file" multiple={false} onDone={({ base64 }) =>  { console.log(`base64.length = ${base64 ? base64.length : 0}`); setFile(base64)} } />
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
          onClick={handleUpload}
          className="NewPostInput-submit"
        >
          Post
        </button>
      </div>
    </div>
  );
};

// New post
const NewPost = (props) => {
  const navigate = useNavigate();
  const addMarket = (body) => {
    post("/api/market", body).then(() => {
      navigate("/markets/");
    });
  };

  return (
    <NewPostInput
      defaultTitle="Title"
      defaultBody="Body text"
      onMarketSubmit={addMarket}
    />
  );
};

export { NewPost };
