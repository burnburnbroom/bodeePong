import React from "react";

class Requierments extends React.Component {
  render() {
    return (
      <div className="chapter" id="Requierments">
        <h2 className="heading">Requierments</h2>
        <p className="chapterInfo">
          BodeePong is a game that captures the movement of your hands where
          they control the paddle. We designed the game in a way were it doesn't
          require any expensive equipment. Bodeepong can be enjoyed in the
          comfort of your own home, no matter rain or shine. We have made this
          game to be tailored specifically for those who want to play Ping Pong
          virtually. so the requierments are:{" "}
        </p>
        <ul>
          <li>An account with BodeePong</li>
          <li>
            Some type of camera to detect the hand movement ( ex. Phone camera,
            Web cameras)
          </li>
        </ul>
        <p />
      </div>
    );
  }
}

export default Requierments;
