import React from "react";

const styles = {
    img: {
        height: "auto",
        margin: 20,
        display: "block",
        justifyContent: "center",
        padding: "20px"
    }
}
function Image(props) {
    return (
        <>
            <img src={props.src} className="img-fluid" alt={props.alt} style={styles.img} />
        </>
    )
}

export default Image;