import React from "react";
import Barchart from "./barchart";

function Queue(props) {
  if (!props.queue) {
    return null;
  }
  function noQueue() {
    if (props.queue.length === 0) {
      return (
        <div className="anim fadeIn">
          <h2>NO QUEUE</h2>
          <div className="bounce"></div>
          <div className="pebble pebble-1"></div>
          <div className="pebble pebble-2"></div>
        </div>
      );
    }
  }

  function orderTime(startTime) {
    let currentTime = props.time;
    let calculatedTime = currentTime - startTime;
    let date = new Date(calculatedTime);
    let minutes = "0" + date.getMinutes();
    let formattedSeconds = "0" + date.getSeconds();
    let formattedMinutes = minutes.substr(-2) + ":" + formattedSeconds.substr(-2);
    let seconds = date.getSeconds();

    if (minutes === "0" + 0) {
      return <h3>{seconds + " seconds ago"}</h3>;
    } else if (minutes > "0" + 0) {
      return <h3>{formattedMinutes + " minutes ago"}</h3>;
    }
  }

  function Showqueue(queue) {
    const [showResults, setShowResults] = React.useState(false);
    if (showResults === true) {
      const onClick = () => setShowResults(false);
      return (
        <div>
          <button type="button" value="" onClick={onClick}>
            <h3>SHOW DETAILS</h3>
          </button>

          {showResults ? <Results bartender={queue} /> : null}
        </div>
      );
    } else {
      const onClick = () => setShowResults(true);
      return (
        <div>
          <button type="button" value="" onClick={onClick}>
            <h3>SHOW DETAILS</h3>
          </button>
          {showResults ? <Results bartender={queue} /> : null}
        </div>
      );
    }
  }

  const Results = () => (
    <div id="data-full-view">
      <div id="data-queue-fullview">
        {props.queue.map((queue, index) => (
          <div id={"order_0" + index} className="order">
            <h2>{queue.id}</h2>
            <ul className="orderList">
              {queue.order.map((order, index) => (
                <li>{order} </li>
              ))}
            </ul>
            {orderTime(queue.startTime)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="queue">
      {/*  <h1>Queue</h1> */}
      <div className="data-first-view">
        <div id="data-queue-barchart">
          <Barchart queue={props.queue} time={props.time} />
        </div>
        {/*  <Barchart queue={props.queue} time={props.time} /> */}
        {noQueue()}
      </div>
      {Showqueue()}
    </section>
  );
}

export default Queue;
