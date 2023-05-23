import React from "react";

function Barchart(props) {
  //mapping the array "arrTen" in to html
  //for each element in the array create a div with the class bar
  //each bar height is changed according to y property of the element in the array
  return (
    <div className="queue_barchart" width={300} height={100}>
      {props.queue.map((queue) => (
        <div className="customer slideIn">
          <img src="./assets/icons/customer_00.svg" alt="customericon"></img>
          <p>{queue.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Barchart;
