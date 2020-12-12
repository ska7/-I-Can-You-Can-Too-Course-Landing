import React from "react";
import Iframe from "react-iframe";

export default function Video({ url }) {
  return (
    <div style={blockStyle} className="video-section">
      <h1 style={h1Style}>ВИДЕООБРАЩЕНИЕ ОТ НАШЕЙ ЖЕНСКОЙ КОМАНДЫ</h1>
      <Iframe
        url="http://www.youtube.com/embed/xDMP3i36naA"
        styles={youtubeStyle}
      />
    </div>
  );
}

const blockStyle = {
  //   background: "rgb(225,198,153)",
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

const youtubeStyle = {
  maxWidth: "480px",
  height: "440px",
};
