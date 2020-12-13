import React from "react";
export default function Prices({ features }) {
  return (
    <div style={blockStyle} className="prices-section">
      <div
        id="prices"
        data-aos="fade"
        data-aos-duration="2000"
        style={titleStyle}
      >
        <h1 style={h1Style}>ВСЕГО ЗА</h1>
        <h1 style={h1Style}>
          <span style={priceStyle}>89₽</span> ТЫ ПОЛУЧИШЬ:
        </h1>
        <ul style={listStyle}>
          {features.map((feature, i) => {
            return (
              <li
                data-aos="zoom-in"
                data-aos-delay="1000"
                style={listItemStyle}
                key={i}
              >
                {feature}
              </li>
            );
          })}
        </ul>
        <button data-aos="zoom-in" data-aos-delay="1000" style={buttonStyle}>
          Я с вами, девочки!
        </button>
      </div>
    </div>
  );
}

const blockStyle = {
  height: "120vh",
  maxWidth: "480px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  background: "rgb(254,236,239)",
};

const titleStyle = {
  margin: "50px 0 0 0",
};

const h1Style = {
  margin: 0,
  width: "95%",
};

const priceStyle = {
  color: "red",
};

const listStyle = {
  margin: "50px 0",
  width: "90%",
  listStyle: "none",
};

const listItemStyle = {
  fontSize: "20px",
  paddingLeft: "50px",
  margin: "35px 0",
};

const buttonStyle = {
  marginTop: "13px",
  width: "80%",
  height: "auto",
  padding: "10px",
  borderRadius: "15px",
  background: "transparent",
  color: "brown",
  fontSize: "20px",
  fontWeight: "bold",
  border: "2px solid brown",
};
