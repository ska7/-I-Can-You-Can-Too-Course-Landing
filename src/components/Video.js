import React from "react";
import YouTube from "react-youtube";

export default function Video() {
  return (
    <div style={blockStyle} className="video-section">
      <h1 style={h1Style}>ВИДЕООБРАЩЕНИЕ ОТ НАШЕГО ЖЕНСКОГО КОМЬЮНИТИ</h1>
      <div style={iframeStyle}>
        <YouTube videoId="3N5dRVFlsNQ" opts={opts} />
      </div>
    </div>
  );
}

const blockStyle = {
  background: "rgb(225,198,153)",
  minHeight: "100vh",
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
  height: "450px",
  width: "85%",
  background: "rgb(98,110,96)",
  borderRadius: "20px",
  margin: "30px 0",
};

const opts = {
  height: "400px",
  width: "100%",
};
