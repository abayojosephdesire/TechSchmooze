import React, { useState } from "react";
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
    <div>
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
      />
      <button
        type="submit"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
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

export {NewOrder};
