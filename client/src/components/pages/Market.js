import React, { useState, useEffect } from "react";
import Card from "../modules/Card.js";
import { NewOrder} from "../modules/NewPostInput.js";
import { get } from "../../utilities";

const Market = (props) => {
  const [orders, setOrders] = useState([]);

  // When the Orders component mounts
  useEffect(() => {
    document.title = "Market"
    get("/api/orders").then((orderObjs) => {
      let reversedOrderObjs = orderObjs.reverse();
      setOrders(reversedOrderObjs);
    });
  }, []);

  // When the user submits an order, which is added on the screen immediately
  const addNewOrder = (orderObj) => {
    setOrders([orderObj].concat(orders));
  };

  let ordersList = null;
  const hasOrders = orders.length !== 0;
  if (hasOrders) {
    ordersList = orders.map((orderObj) => (
      <Card
        content={orderObj.content}
      />
    ));
  } else {
    ordersList = <div>No orders available!</div>;
  }
  return (
    <>
      {/* {props.userId && <NewOrder addNewOrder={addNewOrder} />} */}
{/* Remember to restore this line containing the userId */}




      {<NewOrder addNewOrder={addNewOrder} />}
      {ordersList}
    </>
  );
};
export default Market;
