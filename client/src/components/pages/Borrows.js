import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../modules/Card.js";
import { get } from "../../utilities";

const Borrows = (props) => {
  const navigate = useNavigate();
  const [borrows, setBorrows] = useState([]);

  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  // When the Borrows component mounts
  useEffect(() => {
    document.title = "Borrow"
    get("/api/borrows").then((borrowObjs) => {
      let reversedBorrowObjs = borrowObjs.reverse();
      setBorrows(reversedBorrowObjs);
    });
  }, []);

  let borrowsList = null;
  const hasBorrows = borrows.length !== 0;
  if (hasBorrows) {
    borrowsList = borrows.map((borrowObj) => (
      <Card
        _id={borrowObj._id}
        creator_name={borrowObj.creator_name}
        creator_id={borrowObj.creator_id}
        userId={props.userId}
        postDate={borrowObj.postDate}
        title={borrowObj.title}
        content={borrowObj.content}
      />
    ));
  } else {
    borrowsList = <div>No borrowable items available!</div>;
  }
  return (
    <>
      <div className="Feed-title">
        <h2>Borrowable items</h2>
        <p>Embark on a collaborative journey by exploring our Borrowable Items page, where you can lend
          and borrow a diverse array of items, fostering a sense of community sharing.</p>
      </div>
      {borrowsList}
    </>
  );
};
export default Borrows;
