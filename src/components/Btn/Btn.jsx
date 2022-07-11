import React from "react";
import "./Btn.scss";

const btnTypeClass = {
  google: "google-sign-in",
  invert: "inverted",
};

function Btn({ children, btnType, ...other }) {
  return (
    <button className={`button-container  ${btnTypeClass[btnType]}`} {...other}>
      {children}
    </button>
  );
}

export default Btn;
