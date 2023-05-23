import React from "react";

//check if data/props.storage is recevied
function Storage(props) {
  if (!props.storage) {
    return null;
  }

  //compare function for the sorting of amount in storage
  function compare(a, b) {
    if (a.amount < b.amount) {
      return -1;
    }
    if (a.amount > b.amount) {
      return 1;
    }
    return 0;
  }

  //sorting storage with the function compare
  props.storage.sort(compare);

  //pushing the first five storage to arrFive
  let arrFive = [];
  for (let i = 0; i < 5; i++) {
    arrFive.push(props.storage[i]);
  }

  //mapping the "arrFive" array
  //we add a "src" property to each tap and assign a value from the function "getImgSrc(beername)"
  //src is the source for the img
  props.storage.map((storage) => (storage.src = getImgSrc(storage.name)) /* "./assets/images/taps_images/tap_elhefe.svg" */);

  //receives parameter beername and return respective src as a string
  function getImgSrc(beername) {
    if (beername === "Steampunk") {
      return "./assets/images/storage_images/storage_steampunk.svg";
    } else if (beername === "GitHop") {
      return "./assets/images/storage_images/storage_githop.svg";
    } else if (beername === "El Hefe") {
      return "./assets/images/storage_images/storage_elhefe.svg";
    } else if (beername === "Fairy Tale Ale") {
      return "./assets/images/storage_images/storage_fairytaleale.svg";
    } else if (beername === "Hollaback Lager") {
      return "./assets/images/storage_images/storage_hollaback.svg";
    } else if (beername === "Hoppily Ever After") {
      return "./assets/images/storage_images/storage_hoppilyeverafter.svg";
    } else if (beername === "Mowintime") {
      return "./assets/images/storage_images/storage_mowintime.svg";
    } else if (beername === "Row 26") {
      return "./assets/images/storage_images/storage_row26.svg";
    } else if (beername === "Ruined Childhood") {
      return "./assets/images/storage_images/storage_ruinedchildhood.svg";
    } else if (beername === "Sleighride") {
      return "./assets/images/storage_images/storage_sleighride.svg";
    }
    return "NO PICTURE";
  }

  return (
    <section id="storage">
      <div className="data-first-view">
        <div className="data-storage">
          {props.storage.map((storage, index) => (
            <div id={"storage_0" + index} className="storage">
              <img className="storageimage" src={storage.src} alt="storage" />
              <h2>{storage.name}</h2>
              <p>Amount: {storage.amount} kegs</p>
            </div>
          ))}
        </div>

        <div className="data-full-view hide">
          <div className="data-storage">
            {props.storage.map((storage, index) => (
              <div id={"storage_0" + index} className="storage">
                <img className="storageimage" src={storage.src} alt="storage" />
                <h2>{storage.name}</h2>
                <p>Amount: {storage.amount} kegs</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Storage;
