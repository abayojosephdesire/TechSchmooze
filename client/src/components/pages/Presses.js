import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../modules/Card.js";
import { get } from "../../utilities";

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
      <Card
        _id={pressObj._id}
        creator_name={pressObj.creator_name}
        creator_id={pressObj.creator_id}
        userId={props.userId}
        type={pressObj.type}
        postDate={pressObj.postDate}
        title={pressObj.title}
        content={pressObj.content}
      />
    ));
  } else {
    pressesList = <div>Neither events, news, announcements, nor losts & founds available!</div>;
  }
  return (
    <>
      <div className="Feed-title">
        <h2>Press release</h2>
        <p>Dive into the 'Press' page for a snapshot of campus life—events, news, announcements, and
          lost-and-found. Stay in the loop and connected to the heartbeat of our community.</p>
      </div>
      {pressesList}
    </>
  );
};
export default Presses;
