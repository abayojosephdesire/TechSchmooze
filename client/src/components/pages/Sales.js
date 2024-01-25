import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../modules/Card.js";
import { get } from "../../utilities";

const Sales = (props) => {
  const navigate = useNavigate();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  // When the Orders component mounts
  useEffect(() => {
    document.title = "Sales"
    get("/api/sales").then((saleObjs) => {
      let reversedSaleObjs = saleObjs.reverse();
      setSales(reversedSaleObjs);
    });
  }, []);

  let salesList = null;
  const hasSales = sales.length !== 0;
  if (hasSales) {
    salesList = sales.map((saleObj) => (
      <Card
        _id={saleObj._id}
        creator_name={saleObj.creator_name}
        creator_id={saleObj.creator_id}
        userId={props.userId}
        postDate={saleObj.postDate}
        title={saleObj.title}
        content={saleObj.content}
      />
    ));
  } else {
    salesList = <div>No sales available!</div>;
  }
  return (
    <>
      <div className="Feed-title">
        <h2>Sales</h2>
        <p>Browse through a collection of student listings on the Sales page, where classmates are
          offering various items for purchase – your destination for campus peer-to-peer transactions.</p>
      </div>
      {salesList}
    </>
  );
};
export default Sales;
