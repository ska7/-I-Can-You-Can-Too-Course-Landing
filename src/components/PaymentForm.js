import React, { useState } from "react";
import PaymentFormMeta from "./PaymentFormMeta";

export default function PaymentForm() {
  const [state, setState] = useState("");
  const [charge, setCharge] = useState(249);

  return (
    <div>
      <form
        style={formStyle}
        method="POST"
        action="https://yoomoney.ru/quickpay/confirm.xml"
        className="payment-form-section"
      >
        <PaymentFormMeta charge={charge} state={state} />
        <div style={centerColumn}>
          <label style={{ textAlign: "center" }} for="comment-area">
            <p style={pStyle}>Укажи свой ник в Instagram</p>
          </label>
          <input
            style={userInputFieldStyle}
            autoComplete="off"
            required
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="text"
            name="comment-area"
          ></input>
        </div>

        <div style={centerRow}>
          <input
            style={buttonStyle}
            type="submit"
            value="Продолжить"
            onClick={() => setCharge(charge)}
          />
        </div>
      </form>
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

const userInputFieldStyle = {
  width: "80%",
  border: "1px solid black",
  background: "beige",
  borderRadius: "5px",
};

const pStyle = {
  margin: 0,
  color: "beige",
};

const buttonStyle = {
  marginTop: "20px",
  width: "45%",
  padding: " 10px",
  fontSize: "15px",
  backgroundColor: "transparent",
  border: "1px solid beige",
  color: "beige",
  borderRadius: "5px",
};

const centerRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
};
const centerColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "15px",
  width: "100%",
};
