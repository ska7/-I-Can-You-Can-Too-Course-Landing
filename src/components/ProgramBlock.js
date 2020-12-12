import React from "react";

export default function ProgramBlock({ icon, blockName, lessons }) {
  return (
    <div style={blockStyle}>
      <h2 style={titleStyle} className="program-block">
        {blockName}
      </h2>
      <div className="program-plan-section">
        <div
          id="program"
          className={`lessons-list ${blockName === "МЕНТОРСТВО" && "mentor"}`}
        >
          {lessons.map((lesson, index) => {
            return (
              <span
                style={centerColumn}
                data-aos="zoom-in-down"
                key={index}
                className="lesson"
              >
                <h2 style={dayNumberStyle}>{`День ${index + 1}`}</h2>
                <b style={lessonStyle}>{lesson}</b>
              </span>
            );
          })}
        </div>
      </div>
      <button style={buttonStyle}>ХОЧУ НА СЕМИНАР</button>
    </div>
  );
}

const centerColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const blockStyle = {
  background: "rgb(98,110,96)",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const titleStyle = {
  color: "rgb(225,198,153)",
  textAlign: "center",
  margin: "50px 0",
};

const dayNumberStyle = {
  padding: "20px",
  marginTop: "20px",
  color: "rgb(255, 255, 255)",
  fontSize: "24px",
  width: "50%",
  textAlign: "center",
  borderBottom: "1px solid rgb(225,198,153)",
};

const lessonStyle = {
  padding: "20px",
  textAlign: "center",
  width: "80%",
  color: "white",
  fontWeight: "400",
  fontFamily: `'Roboto', sans-serif`,
};

const buttonStyle = {
  margin: "70px 0px",
  width: "80%",
  height: "auto",
  padding: "10px",
  borderRadius: "15px",
  background: "transparent",
  color: "rgb(225,198,153)",
  fontSize: "100%",
  fontWeight: "bold",
  border: "3px solid rgb(225,198,153)",
};
