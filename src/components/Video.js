import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import YouTube from "react-youtube";

export default function Video({ url }) {
  const [opts, setOpts] = useState({
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  });

  const handlePlay = (event) => {
    event.target.setSize(window.screen.width, window.screen.height);
  };

  const handleStop = (event) => {
    event.target.setSize("100%", "100%");
  };

  return (
    <div style={blockStyle} className="video-section">
      <h1 style={h1Style}>ВИДЕООБРАЩЕНИЕ ОТ НАШЕЙ ЖЕНСКОЙ КОМАНДЫ</h1>
      <div style={iframeStyle}>
        <YouTube
          videoId="DZuXhbpuRRY"
          id="player"
          opts={opts}
          onPlay={handlePlay}
          onPause={handleStop}
          onEnd={handleStop}
        />
      </div>
    </div>
  );
}

const blockStyle = {
  background: "rgb(225,198,153)",
  height: "500px",
  maxWidth: "480px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
};

const h1Style = {
  margin: "50px 0",
  color: "rgb(98,110,96)",
  width: "90%",
  fontSize: "30px",
};

const iframeStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
  width: "90%",
  background: "rgb(98,110,96)",
};
