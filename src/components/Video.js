import React from "react";
import Iframe from "react-iframe";
import YouTube from "react-youtube";

export default function Video({ url }) {
  return (
    <div style={blockStyle} className="video-section">
      <h1 style={h1Style}>ВИДЕООБРАЩЕНИЕ ОТ НАШЕЙ ЖЕНСКОЙ КОМАНДЫ</h1>
      {/* <div style={iframeStyle}> */}
      {/* <Iframe
          url="http://www.youtube.com/embed/DZuXhbpuRRY"
          width="90%"
          height="auto"
        /> */}
      <YouTube videoId="DZuXhbpuRRY" opts={opts} />
      {/* </div> */}
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

const opts = {
  // Youtube embed styling
  width: "90%",
  height: "auto",
};

const youtubeStyle = {
  maxWidth: "480px",
  height: "600px",
};
