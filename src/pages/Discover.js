import React, { useState, useEffect } from "react";
import Image from "../components/Image";
import API from "../utils/API";

const styles = {
    container: {
        padding: 30,
        margin: "auto",
        width: "50%",
        justifyContent: "center"
    }
}

function Discover(){
    const [number, setnumber] = useState(0);
    const [image, setImage] = useState("");
    // useEffect(() => {
    //     API.generateRandomDog.then((res)=>{
    //         setImage(res.message);
    //     })
    //     }
    // , []);
return(
    <>
    <div className = "row">
    <div style = {styles.container}className= "container">
        <h1 style = {{textAlign : "center"}}>Make New Pals</h1>
        <h3 style = {{textAlign : "center"}}>Thumbs up on any pups you'd like to meet!</h3>
        <Image src = {image} alt ="dog"/>
        {/* <button onClick = {()=> setImage(res.message)}>thumsb down</button>
        <button onClick = {()=> setImage(res.message)}>thumbs up</button> */}
        <h1 style = {{textAlign : "center"}} >Made Friends with {number} pups so far!</h1>
    </div>
    </div>
    </>
)
}

export default Discover;