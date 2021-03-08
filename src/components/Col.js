import React from "react";

function Col(props) {
    return (
        <div className={`col-md-${props.size}`} >{props.children}</div>)
}
export default Col;