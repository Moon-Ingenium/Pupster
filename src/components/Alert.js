import React from "react";

function Alert(props) {
  return (
    <div
      role="alert"
      className={props.class}
    >
      {props.children}
    </div>
  );
}

export default Alert;