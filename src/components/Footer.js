import React from "react";

var style = {
    footer : {
    backgroundColor: "white",
    borderTop: "1px  #E7E7E7",
    textAlign: "center",
    padding: "30px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    border: "none"
   
},
a: {
    color:"black",
     textDecoration: "none", 
     fontFamily: "arial"
}

}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer(props){
    return(
            <div className = "footer">
                <div style={phantom} />
                <div style={style.footer}>
                <i style={{ padding: "10px", color: "black" }} className="fa fa-copyright"><a style = {style.a} href="https://github.com/Moon-Ingenium/Pupster" rel="noopener noreferer">Moon-Ingenium 2020</a>
        </i>
                </div>
            </div>
    )
}

export default Footer;
