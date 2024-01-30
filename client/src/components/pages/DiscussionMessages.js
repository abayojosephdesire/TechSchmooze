import React, { useEffect, useState } from "react";
import DiscussionChat from "../modules/DiscussionChat.js";
import { useNavigate, useLocation } from "react-router-dom";
import { socket } from "../../client-socket.js";
import { get, post } from "../../utilities";
import "./DiscussionMessages.css";

const DiscussionMessages = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const discussionId = searchParams.get("discussionId");
  const content = searchParams.get("content");
  const [activeDiscussionChat, setActiveDiscussionChat] = useState({
    discussionId: discussionId,
    discussionMessages: [],
  });
  const loadDiscussionMessageHistory = (discussionId) => {
    if (!props.userId){
      navigate("/");
    } else {
      get("/api/discussionMessages", { discussionId: discussionId }).then((discussionMessages) => {
        setActiveDiscussionChat({
          discussionId: discussionId,
          discussionMessages: discussionMessages,
        });
      });
    }
  };
  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  useEffect(() => {
    document.title = "Discussion";
  }, []);

  useEffect(() => {
    loadDiscussionMessageHistory(discussionId);
  }, [discussionId]);


  useEffect(() => {
    if (discussionId && props.userId) {
      post("/api/addUserToRoom", { discussionId: discussionId, userId: props.userId});
    }
  }, [discussionId, props.userId]);

  useEffect(() => {
    const addDiscussionMessages = (data) => {
      if (
        (data.discussionId === activeDiscussionChat.discussionId &&
          data.sender._id === props.userId) ||
        (data.sender._id === activeDiscussionChat.discussionId &&
          data.discussionId === props.userId)
      ) {
        setActiveDiscussionChat(prevActiveDiscussionChat => ({
          discussionId: prevActiveDiscussionChat.discussionId,
          discussionMessages: prevActiveDiscussionChat.discussionMessages.concat(data),
        }));
      }
    };
    socket.on("discussionMessage", addDiscussionMessages);
    return () => {
      socket.off("discussionMessage", addDiscussionMessages);
      post("/api/removeUserFromRoom");
    };
  }, [activeDiscussionChat.discussionId, props.userId]);

  return (
    <>
      <div className="DiscussionMessages-container">
        <DiscussionChat data={activeDiscussionChat} content={content} />
      </div>
    </>
  );
}

export default DiscussionMessages;
