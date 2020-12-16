import React, { useEffect } from "react";
import { Link } from "react-scroll";

export default function Intro() {
  return (
    <div style={sectionStyle} className="intro-section">
      <div style={logoStyle} data-aos="flip-up">
        <span style={spanOneStyle}>
          <span style={{ fontSize: "60px" }}>Я</span> могу
        </span>
        <div style={triangle} />
        <span style={spanTwoStyle}>
          <span style={{ fontSize: "60px" }}>Ты</span> можешь
        </span>
      </div>
      <div style={courseMotoStyle} data-aos="fade-in" data-aos-delay="1000">
        <h2 style={h2Style}>Онлайн-семинар про бесстрашный путь девушки</h2>
        <p style={pStyle}>
          7-дневный онлайн-саминар на котором 7 эксперток помогут тебе найти
          вдохновение и получить ценные советы в ключевых сферах жизни девушки:
          от отношений и любви к себе до красоты и сексуальности. Погрузись в
          атмосферу женской поддержки и дружбы и получи возможность выиграть
          2000 рублей или подарок от каждой спикерки!
        </p>
        <div style={centerRow}>
          <Link
            style={buttonLinkStyle}
            to="prices"
            active
            smooth
            duration="1000"
          >
            <button style={buttonStyle}>Я С ВАМИ, ДЕВОЧКИ!</button>
          </Link>
          <Link
            style={buttonLinkStyle}
            to="program"
            active
            smooth
            duration="1000"
          >
            <button style={buttonStyle}>ПОСМОТРЕТЬ ПРОГРАММУ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const centerRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
};

const sectionStyle = {
  position: "relative",
  maxWidth: "480px",
  minHeight: "900px",
  background: "rgba(253, 207, 215, 0.4)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
};

const logoStyle = {
  marginTop: "20px",
  position: "relative",
  fontSize: "20px",
  display: "flex",
  height: "220px",
  width: "220px",
  flexDirection: "row",
  background: "#e1c699",
  borderRadius: "50%",
  overflow: "hidden",
  boxShadow: "0 0 10px black",
};

const spanOneStyle = {
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "30px",
  color: "#626e60",
  width: "50%",
  background: "#e1c699",
};
const spanTwoStyle = {
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "rgb(225,198,153)",
  background: "#626e60",
  width: "45%",
  paddingRight: "35px",
};

const triangle = {
  height: "90px",
  width: 0,
  background: "transparent",
  borderLeft: "15px solid #e1c699",
  borderBottom: "20px solid #626e60",
  borderLeftWidth: "50px",
  borderBottomWidth: "300px",
  marginLeft: "10px",
};

const courseMotoStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  textAlign: "center",
  height: "auto",
  padding: "20px",
  width: "90%",
};

const h2Style = {
  fontWeight: "bold",
  fontSize: "35px",
};

const pStyle = {
  marginTop: "20px",
  fontSize: "17px",
};

const buttonStyle = {
  margin: "13px 0 20px 0",
  width: "100%",
  height: "100px",
  padding: "10px",
  borderRadius: "15px",
  background: "transparent",
  color: "#626e60",
  fontSize: "80%",
  fontWeight: "bold",
  border: "3px solid #626e60",
};

const buttonLinkStyle = {
  height: "auto",
  background: "transparent",
  width: "40%",
  marginTop: "60px",
};
