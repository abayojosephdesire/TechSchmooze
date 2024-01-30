import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser.js";
import "./ChatList.css"

const ChatList = (props) => {
  return (
    <>
      <h3 className="ChatList-title">Chats</h3>
      <div className="ChatList-container">
        {props.users.map((user, i) => (
            <SingleUser
              key={i}
              setActiveUser={props.setActiveUser}
              user={user}
              active={user === props.active}
            />
          ))}
      </div>
    </>
  );
}

export default ChatList;
