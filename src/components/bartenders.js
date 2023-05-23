import React from "react";
import $ from "jquery";
import Results from "./Results.js";
//check if data/props.bartender is recevied
function Bartenders(props) {
  if (!props.bartenders) {
    return null;
  }

  //array of objects with the property src and a string of the given src
  const bartenderIcons = [
    {
      src: "./assets/icons/peter_icon_red.svg",
    },
    {
      src: "./assets/icons/klaus_icon_red.svg",
    },
    {
      src: "./assets/icons/jonas_icon_red.svg",
    },
    {
      src: "./assets/icons/dannie_icon_red.svg",
    },
  ];

  const tapsOnly = [
    {
      name: "Mowintime",
      src: "./assets/images/taps_images/mowintime-only-tap.svg",
    },
    {
      name: "El Hefe",
      src: "./assets/images/taps_images/elhefe-only-tap.svg",
    },
    {
      name: "GitHop",
      src: "./assets/images/taps_images/githop-only-tap.svg",
    },
    {
      name: "Row 26",
      src: "./assets/images/taps_images/row26-only-tap.svg",
    },
    {
      name: "Ruined Childhood",
      src: "./assets/images/taps_images/ruinedchildhood-only-tap.svg",
    },
    {
      name: "Fairy Tale Ale",
      src: "./assets/images/taps_images/fairytaleale-only-tap.svg",
    },
    {
      name: "Hoppily Ever After",
      src: "./assets/images/taps_images/hoppilyeverafter-only-tap.svg",
    },
    {
      name: "Hollaback Lager",
      src: "./assets/images/taps_images/hollaback-only-tap.svg",
    },
    {
      name: "Sleighride",
      src: "./assets/images/taps_images/sleighride-only-tap.svg",
    },
    {
      name: "Steampunk",
      src: "./assets/images/taps_images/steampunk-only-tap.svg",
    },
  ];

  function filterTapsOnly(tapbeer) {
    let filteredTaps = tapsOnly.findIndex((item) => item.name === tapbeer);
    return tapsOnly[filteredTaps].src;
  }
  //check if bartender is using tap or not if true return string the tap else return string "none"
  function usingTap(tap) {
    let beer = "";
    if (tap === null) {
      beer = null;
      return beer;
    } else {
      beer = props.taps[tap].beer;
      return <img src={filterTapsOnly(beer)} alt="beer taps"></img>;
    }
  }

  function checkStatus(bartender) {
    if (bartender.status === "WORKING" || bartender.status === "READY" || bartender.status === "WAITING") {
      return "green";
    } else if (bartender.status === "BREAK") {
      return "yellow";
    } else if (bartender.status === "OFF") {
      return "red";
    }
  }

  function pouringBeer(statusDetail) {
    if (statusDetail === "pourBeer") {
      $(function () {
        function beerRise() {
          $(".beer").addClass("fill");
        }
        function pourBeer() {
          $(".pour").addClass("pouring");
          beerRise();
          setTimeout(function () {
            $(".pour").addClass("end");
          }, 1000);
        }
        setTimeout(function () {
          pourBeer();
        }, 1000);
      });

      return (
        <div id="container">
          <div className="glass">
            <div className="beer"></div>
          </div>

          <div className="pour"></div>
          <p></p>
        </div>
      );
    }
    return null;
  }

  function Changeview(bartenders) {
    const [showResults, setShowResults] = React.useState(false);

    if (showResults === true) {
      const onClick = () => setShowResults(false);
      return (
        <div>
          <button type="button" value="" onClick={onClick}>
            SHOW DETAILS
          </button>

          {showResults ? <Results bartender={bartenders} /> : null}
        </div>
      );
    } else {
      const onClick = () => setShowResults(true);
      return (
        <div>
          <button type="button" value="" onClick={onClick}>
            <h3>SHOW DETAILS</h3>
          </button>
          {showResults ? <Results bartender={bartenders} /> : null}
        </div>
      );
    }
  }

  const bartenders = () =>
    props.bartenders.map((bartender, index) => (
      <div id={"bartender_0" + index} className="bartender">
        <div className="bartender-first-view">
          <svg>
            <circle cx="10" cy="10" r="10" stroke="none" strokeWidth="3" fill={checkStatus(bartender)} />
          </svg>
          <img src={bartenderIcons[index].src} alt="bartenderimage" />
          <h2>{bartender.name}</h2>
          <div className="bartender-icons">
            <div className="onlyTap">{usingTap(bartender.usingTap)}</div>
            {pouringBeer(bartender.statusDetail)}
          </div>
        </div>

        {Changeview(bartender)}
      </div>
    ));

  return (
    <section id="bartenders">
      <div className="data-first-view">
        <div id="data-bartenders">{bartenders()}</div>
      </div>
    </section>
  );
}

export default Bartenders;
