import React from "react";
import { Link } from "react-scroll";

export default function ProgramBlock({ lessons, blockName }) {
  return (
    <div style={blockStyle}>
      <h2 style={titleStyle} className="program-block">
        {blockName}
      </h2>
      <div className="program-plan-section">
        <div id="program" className="lessons-list">
          {lessons.map((lesson, index) => {
            return (
              <span style={centerColumn} data-aos="zoom-in-down" key={index}>
                <div style={expertDayStyle}>
                  <h2 style={dayNumberStyle}>{`День ${index + 1}`}</h2>
                  <div style={avatarStyle}>
                    <img style={imageStyle} src={lesson.avatar} alt="expert" />
                  </div>
                </div>
                <a style={aStyle} href={lesson.link} target="_blank">
                  <h3 style={h3Style}>{lesson.name}</h3>
                </a>
                <b style={lessonStyle}>{lesson.topic}</b>
              </span>
            );
          })}
        </div>
      </div>
      <Link style={centerColumn} active smooth to="prices" duration="1000">
        <button style={buttonStyle}>ХОЧУ НА СЕМИНАР</button>
      </Link>
    </div>
  );
}

const centerColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  margin: "20px 0",
};

const blockStyle = {
  background: "rgb(98,110,96)",
  display: "flex",
  minHeight: "260vh",
  maxWidth: "480px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const titleStyle = {
  color: "rgb(225,198,153)",
  textAlign: "center",
  margin: "50px 0",
};

// Expert Card

const expertDayStyle = {
  borderBottom: "1px solid rgb(225,198,153)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
};

const dayNumberStyle = {
  padding: "20px",
  marginTop: "20px",
  color: "rgb(255, 255, 255)",
  fontSize: "24px",
  width: "50%",
  textAlign: "center",
};

const avatarStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  overflow: "hidden",
};

const imageStyle = {
  height: "50px",
  width: "50px",
};

const aStyle = {
  textDecoration: "none",
};

const h3Style = {
  color: "rgb(254,236,239)",
  margin: "10px 0",
  fontSize: "20px",
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
