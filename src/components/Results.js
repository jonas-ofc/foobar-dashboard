import React from "react";

function Results(props) {
  //check if bartender is serving a customer or not if true return customer else return string "none"
  function servingCustomer(customer) {
    if (customer === null) {
      return null;
    } else {
      return "Nr: " + customer;
    }
  }
  console.log(props);
  return (
    <div className="data-full-view">
      <h3>Customer:</h3>
      <p>{servingCustomer(props.bartender.servingCustomer)}</p>
      <h3>Status:</h3>
      <p>{props.bartender.status}</p>
      <h3>Status Detail: </h3>
      <p>{props.bartender.statusDetail}</p>
      <h3>Using Tap: </h3>
      {<p>{props.bartender.usingTap === "null" ? <p>none</p> : props.bartender.usingTap}</p>}{" "}
    </div>
  );
}

export default Results;
