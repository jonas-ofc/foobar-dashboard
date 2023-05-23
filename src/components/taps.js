import React from "react";

//check if data/props.taps is recevied
function Taps(props) {
  if (!props.taps) {
    return null;
  }

  let fullkeg = "./assets/images/taps_images/fullkeg.svg";
  let emptykeg = "./assets/images/taps_images/lowkeg.svg";

  function kegPercentage(partialValue, totalValue) {
    let calculate = partialValue / totalValue;
    let percentageNumber = 100 * calculate;
    let summ = 100 - percentageNumber;
    return `${summ}%`;
  }

  //we add a "src" property to each tap and assign a value from the function "getImgSrc(beername)"
  //src is the source for the img
  props.taps.map((tap) => (tap.src = getImgSrc(tap.beer)) /* "./assets/images/taps_images/tap_elhefe.svg" */);

  //receives parameter beername and return respective src as a string
  function getImgSrc(beername) {
    if (beername === "Steampunk") {
      return "./assets/images/taps_images/steampunk-only-tap.svg";
    } else if (beername === "GitHop") {
      return "./assets/images/taps_images/githop-only-tap.svg";
    } else if (beername === "El Hefe") {
      return "./assets/images/taps_images/elhefe-only-tap.svg";
    } else if (beername === "Fairy Tale Ale") {
      return "./assets/images/taps_images/fairytaleale-only-tap.svg";
    } else if (beername === "Hollaback Lager") {
      return "./assets/images/taps_images/hollaback-only-tap.svg";
    } else if (beername === "Hoppily Ever After") {
      return "./assets/images/taps_images/hoppilyeverafter-only-tap.svg";
    } else if (beername === "Mowintime") {
      return "./assets/images/taps_images/mowintime-only-tap.svg";
    } else if (beername === "Row 26") {
      return "./assets/images/taps_images/row26-only-tap.svg";
    } else if (beername === "Ruined Childhood") {
      return "./assets/images/taps_images/ruinedchildhood-only-tap.svg";
    } else if (beername === "Sleighride") {
      return "./assets/images/taps_images/sleighride-only-tap.svg";
    }
    return "NO PICTURE";
  }

  // return section with data from the received props, in DOM
  // mapping "arrFive" in html - for each tap in the array create a div with id that ends on the index number of the tap
  // inside div create img, h2, p, p
  // img src is reached in the "arrFive" array by index and "." + "src"
  // rest of data is reached through props and some handled by functions as percentage() an inUse()
  return (
    <section id="taps">
      <div className="data-first-view">
        <div id="data-taps">
          {props.taps.map((tap, index) => (
            <div id={"tap_0" + index} className="tap">
              <h1>{tap.id}</h1>
              <div className="keg">
                <div className="fullkeg">
                  <img src={fullkeg} alt="full keg"></img>
                </div>
                <div id={"tap_keg_0" + index} className="emptykeg" style={{ height: kegPercentage(tap.level, tap.capacity) }}>
                  <img src={emptykeg} alt="empty tag"></img>
                </div>
              </div>

              <img className="tapsimage" src={tap.src} alt="tap beer"></img>
              <>
                <h2>{tap.beer}</h2>
              </>
            </div>
          ))}
        </div>
      </div>
      <div className="data-full-view"></div>
    </section>
  );
}

export default Taps;
