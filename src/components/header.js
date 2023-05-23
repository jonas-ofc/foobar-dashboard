import React from "react";

function Header(props) {
  let timestamp = props.time;
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return (
    <header>
      <div id="logo">
        <div className="logo">
          <h1 className="title">FOO BAR</h1>
          <h1 className="firstfade">FOO BAR</h1>
          <h1 className="lastfade">FOO BAR</h1>
        </div>
      </div>
      <div id="slogan">Everybody was kung foo drinking</div>
      <div id="data-time">
        <p>Time: {formattedTime} </p>
      </div>
    </header>
  );
}

export default Header;
