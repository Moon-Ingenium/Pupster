import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../components/Image";

const styles = {
    container: {
        padding: 30,
        margin: "auto",
        width: "50%",
        justifyContent: "center"
    }
}

function Discover(){
return(
    <>
    <div className = "row">
    <div style = {styles.container}className= "container">
        <h1 style = {{textAlign : "center"}}>Make New Pals</h1>
        <h3 style = {{textAlign : "center"}}>Thumbs up on any pups you'd like to meet!</h3>
        <Image src = "https://via.placeholder.com/300" alt ="placeholder"/>
        <h1 style = {{textAlign : "center"}} >Made Friendswith 0 pups so far!</h1>
    </div>
    </div>
    </>
)
}

export default Discover;