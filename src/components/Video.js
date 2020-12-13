import React from "react";
import Iframe from "react-iframe";

export default function Video({ url }) {
  return (
    <div style={blockStyle} className="video-section">
      <h1 style={h1Style}>ВИДЕООБРАЩЕНИЕ ОТ НАШЕЙ ЖЕНСКОЙ КОМАНДЫ</h1>
      <div style={iframeStyle}>
        <Iframe
          url="http://www.youtube.com/embed/xDMP3i36naA"
          styles={youtubeStyle}
          width="90%"
          height="auto"
        />
      </div>
    </div>
  );
}

const blockStyle = {
  background: "rgb(225,198,153)",
  height: "500px",
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

const youtubeStyle = {
  maxWidth: "480px",
  height: "600px",
};
