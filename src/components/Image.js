import React from "react";


function Image(props) {
    return (
        <>
            <img style= {{maxWidth: 300}}src={props.src} className="mx-auto d-block" alt={props.alt}/>
        </>
    )
}

export default Image;