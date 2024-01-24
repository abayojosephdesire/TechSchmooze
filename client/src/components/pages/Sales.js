import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardSale from "../modules/CardSale.js";
import { NewSale} from "../modules/NewPostInput.js";
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

  // When the user submits a sale, which is added on the screen immediately
  const addNewSale = (saleObj) => {
    setSales([saleObj].concat(sales));
  };

  let salesList = null;
  const hasSales = sales.length !== 0;
  if (hasSales) {
    salesList = sales.map((saleObj) => (
      <CardSale
        _id={saleObj._id}
        creator_name={saleObj.creator_name}
        creator_id={saleObj.creator_id}
        userId={props.userId}
        content={saleObj.content}
      />
    ));
  } else {
    salesList = <div>No sales available!</div>;
  }
  return (
    <>
      {props.userId && <NewSale addNewSale={addNewSale} />}
      {salesList}
    </>
  );
};
export default Sales;
