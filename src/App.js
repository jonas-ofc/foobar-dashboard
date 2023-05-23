import React from "react";
import Header from "./components/header";
import Bartenders from "./components/bartenders";
import Storage from "./components/storage";
import Taps from "./components/taps";
import Queue from "./components/queue";
import Tables from "./components/tables";

import "./styles/index.scss";
import { useState, useEffect } from "react";

function App() {
  //tilføj state fulldata, ændre state med setData
  //Add state "fulldata", change state with "setData"
  const [fulldata, setData] = useState([]);

  const [tableData, tableSetData] = useState([]);

  const tableURL = "https://foobar-cc0c.restdb.io/rest/foobar";
  const tableAPI = "61b71e3fa3fedd557f8e0abd";

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(tableURL, {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": tableAPI,
          "cache-control": "no-cache",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          tableSetData(data);
        });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  //using "useEffect" with "setInterval" to change state with fetched data every second
  //fetching data from heroku
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      fetch("https://coding-mokeys-foobar.herokuapp.com/")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  //return section-components in DOM
  //each section-component receiceves data from the state "fulldata(updates every second with "setData")"
  //the data received in each component depends on section and is reached with "fulldata" + "." + "the data you need"
  //the data recevied is assigned an id and can be reached in each component by using "props" + "." + "(the assigned id)"
  return (
    <>
      <Header time={fulldata.timestamp} />
      <div className="dashboard">
        <Queue queue={fulldata.queue} time={fulldata.timestamp}></Queue>
        <Bartenders bartenders={fulldata.bartenders} taps={fulldata.taps} />
        <Taps taps={fulldata.taps} />
        <Tables tables={tableData} data={fulldata} />
        <Storage storage={fulldata.storage} />
      </div>
    </>
  );
}

export default App;
