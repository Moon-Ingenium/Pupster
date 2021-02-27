import React from "react";

const styles= {
    jumbotron:{
        backgroundColor: "white",
    },
    h1:{
        textAlign: "center",
        color: "black",
    }
}
function Jumbotron(props){
return(
<div style ={styles.jumbotron} className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 style = {styles.h1} className="text">{props.children}</h1> 
  </div>
</div>

)
}

export default Jumbotron;
