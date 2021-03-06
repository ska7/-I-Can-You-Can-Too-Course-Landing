import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import Modal from "react-modal";
import PaymentFormMeta from "./PaymentFormMeta";

const paymentForm = <PaymentForm />;

Modal.setAppElement("#root");

export default function Prices({ features }) {
  const [isOpen, openModal] = useState(false);

  return (
    <div style={blockStyle} className="prices-section">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => openModal(false)}
        style={modalStyle}
      >
        <PaymentForm />
      </Modal>

      <div data-aos="fade" data-aos-duration="2000" style={titleStyle}>
        <h1 style={h1Style}>ВСЕГО ЗА</h1>
        <h1 style={h1Style}>
          <span style={priceStyle}>249₽</span>
        </h1>
        <h1 style={h1Style}>ТЫ ПОЛУЧИШЬ:</h1>
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
        <a
          href="https://monecle.com/buy/40187"
          target="_blank"
          rel="noreferrer"
        >
          <button id="prices" data-aos="zoom-in" style={buttonStyle}>
            Хочу к вам, я из Украины
          </button>
        </a>
        <a>
          <button
            onClick={() => openModal(true)}
            data-aos="zoom-in"
            style={buttonStyle}
          >
            Хочу к вам, я из другой страны
          </button>
        </a>
      </div>
    </div>
  );
}

const blockStyle = {
  minHeight: "180vh",
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
  fontFamily: `"Montserrat", sans-serif`,
};

const listStyle = {
  margin: "100px 0",
  width: "90%",
  listStyle: "none",
};

const listItemStyle = {
  fontSize: "20px",
  paddingLeft: "50px",
  margin: "35px 0",
};

const buttonStyle = {
  margin: "0 0 50px 0",
  width: "80%",
  height: "auto",
  padding: "10px",
  borderRadius: "15px",
  background: "transparent",
  color: "brown",
  fontSize: "20px",
  fontWeight: "bold",
  border: "2px solid brown",
  fontFamily: `"Cormorant Garamond", serif`,
};

const modalStyle = {
  content: {
    position: "absolute",
    height: "200px",
    margin: "auto 0 auto 0",
    background: "rgb(98,110,96)",
  },
};
