import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../modules/Card.js";
import { get } from "../../utilities";

const GiveAways = (props) => {
  const navigate = useNavigate();
  const [giveaways, setGiveAways] = useState([]);

  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  // When the Give Away component mounts
  useEffect(() => {
    document.title = "Give away"
    get("/api/giveaways").then((giveawayObjs) => {
      let reversedGiveAwayObjs = giveawayObjs.reverse();
      setGiveAways(reversedGiveAwayObjs);
    });
  }, []);

  let giveawaysList = null;
  const hasGiveAways = giveaways.length !== 0;
  if (hasGiveAways) {
    giveawaysList = giveaways.map((giveawayObj) => (
      <Card
        _id={giveawayObj._id}
        creator_name={giveawayObj.creator_name}
        creator_id={giveawayObj.creator_id}
        userId={props.userId}
        postDate={giveawayObj.postDate}
        title={giveawayObj.title}
        content={giveawayObj.content}
      />
    ));
  } else {
    giveawaysList = <div>No give aways available!</div>;
  }
  return (
    <>
      <div className="Feed-title">
        <h2>Give aways</h2>
        <p>Experience the joy of giving and receiving on our Giveaways page, where users can share kindness
          by offering free items to the community. Join the spirit of generosity and discover treasures that are freely given.</p>
      </div>
      {giveawaysList}
    </>
  );
};
export default GiveAways;
