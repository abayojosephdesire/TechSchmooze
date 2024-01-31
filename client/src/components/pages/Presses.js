import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardPress from "../modules/CardPress.js";
import { get } from "../../utilities";
import "./Presses.css";

const Presses = (props) => {
  const navigate = useNavigate();
  const [presses, setPresses] = useState([]);

  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  // When the Presses component mounts
  useEffect(() => {
    document.title = "Press"
    get("/api/presses").then((pressObjs) => {
      let reversedPressObjs = pressObjs.reverse();
      setPresses(reversedPressObjs);
    });
  }, []);

  let pressesList = null;
  const hasPresses = presses.length !== 0;
  if (hasPresses) {
    pressesList = presses.map((pressObj) => (
      <CardPress
        _id={pressObj._id}
        creator_name={pressObj.creator_name}
        creator_id={pressObj.creator_id}
        userId={props.userId}
        postDate={pressObj.postDate}
        title={pressObj.title}
        content={pressObj.content}
      />
    ));
  } else {
    pressesList = <div>Neither events, news, announcements, nor losts & founds available!</div>;
  }
  return (
    <div className="Presses-container">
      <div>
        <h2>News | Announcements | Lost & founds</h2>
      </div>
      {pressesList}
    </div>
  );
};
export default Presses;
