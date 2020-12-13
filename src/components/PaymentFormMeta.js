import React from "react";

export default function PaymentFormMeta({ charge, state }) {
  return (
    <>
      <input type="hidden" name="receiver" value="410014822462996" />
      <input
        type="hidden"
        name="formcomment"
        value={`'Я могу - Ты можешь' Курс`}
      />{" "}
      <input
        type="hidden"
        name="short-dest"
        value={`'Я могу - Ты можешь' Курс`}
      />{" "}
      <input type="hidden" name="label" value="$order_id" />{" "}
      <input type="hidden" name="quickpay-form" value="shop" />{" "}
      <input type="hidden" name="targets" value="`'Я могу - Ты можешь' Курс`" />{" "}
      <input type="hidden" name="sum" value={charge} data-type="number" />{" "}
      <input type="hidden" name="comment" value={state} />{" "}
      <input type="hidden" name="need-fio" value="false" />{" "}
      <input type="hidden" name="need-email" value="false" />{" "}
      <input type="hidden" name="need-phone" value="false" />{" "}
      <input type="hidden" name="need-address" value="false" />{" "}
    </>
  );
}
