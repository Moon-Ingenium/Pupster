import React from "react";


function Button(props) {
  return (
    <button 
      onClick={props.onClick} 
      className={`btn ${props["data-value"]}`} 
      data-value={props["data-value"]} 
    >{props.children}</button>
  );
}

export default Button;