import React, { useState, useEffect, useRef } from "react";
import "./NewMessageInput.css";
import { post } from "../../utilities";

const NewMessageInput = (props) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState(props.defaultMessageText);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };

  return (
    <div className="NewMessage-container">
      <input
        className="NewMessage-input"
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        ref={inputRef}
      />
      <button
        className="NewMessage-submit"
        type="submit"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
};

const NewMessage = (props) => {
  const sendMessage = (value) => {
    const body = { recipient: props.recipient, content: value };
    post("/api/message", body);
  };

  return <NewMessageInput defaultText="Write here" defaultMessageText={props.defaultMessageText} onSubmit={sendMessage} />;
}

export { NewMessage };
