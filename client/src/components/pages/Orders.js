import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../modules/Card.js";
import { get } from "../../utilities";

const Orders = (props) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  // When the Orders component mounts
  useEffect(() => {
    document.title = "Orders"
    get("/api/orders").then((orderObjs) => {
      let reversedOrderObjs = orderObjs.reverse();
      setOrders(reversedOrderObjs);
    });
  }, []);

  let ordersList = null;
  const hasOrders = orders.length !== 0;
  if (hasOrders) {
    ordersList = orders.map((orderObj) => (
      <Card
        _id={orderObj._id}
        creator_name={orderObj.creator_name}
        creator_id={orderObj.creator_id}
        userId={props.userId}
        postDate={orderObj.postDate}
        title={orderObj.title}
        content={orderObj.content}
      />
    ));
  } else {
    ordersList = <div>No orders available!</div>;
  }
  return (
    <>
      {/* {props.userId && <NewOrder addNewOrder={addNewOrder} />} */}
      <div className="Feed-title">
        <h2>Orders</h2>
        <p>Uncover an array of desired items listed by fellow students eager to make a
          purchase on the Orders page – your go-to destination for campus marketplace aspirations.</p>
      </div>
      {ordersList}
    </>
  );
};
export default Orders;
