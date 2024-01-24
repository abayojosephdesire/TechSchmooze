import React, { useState } from "react";
import "./NewPostInput.css";
import { post } from "../../utilities";

// New order input
const NewPostInput = (props) => {
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
    <div className="NewPostinput-container">
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      />
      <button
        type="submit"
        value="Submit"
        onClick={handleSubmit}
        className="NewPostInput-button"
      >
        Send
      </button>
    </div>
  );
};

// New order
const NewOrder = (props) => {
  const addOrder = (value) => {
    const body = { content: value };
    post("/api/order", body).then((order) => {
      props.addNewOrder(order);
    });
  };

  return <NewPostInput defaultText="Enter Order" onSubmit={addOrder} />;
};

// New Sale
const NewSale = (props) => {
  const addSale = (value) => {
    const body = { content: value };
    post("/api/sale", body).then((sale) => {
      props.addNewSale(sale);
    });
  };

  return <NewPostInput defaultText="Enter sale" onSubmit={addSale} />;
};

export {NewOrder, NewSale};
