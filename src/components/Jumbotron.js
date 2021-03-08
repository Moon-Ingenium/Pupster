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
function Jumbotron(){
return(
<div style ={styles.jumbotron} className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 style = {styles.h1} className="text">Search By Breed</h1> 
  </div>
</div>

)
}

export default Jumbotron;
