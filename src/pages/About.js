import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../components/Image";

const styles = {
    container:{
        display: "block",
        justifyContent: "center",
        margin: "auto",
        alignItems: "center"

    },
    section:{
        textAlign: "center",
        padding: 20,
        marginBottom: 30
    }
}
function About(){
return(
    <>
    <div className= "container" style = {styles.div}>
    <Image src = "https://thehappypuppysite.com/wp-content/uploads/2018/02/bloodhound-header.jpg" alt ="dog"/>
    <section style = {styles.section}>
        Pupster is an app to friend your favorite dogs. To get started, navigate to the Discover page. 
        <br></br>
        To add new friends, click the thumbs up. 
        <br></br>
        To decline a friend, click the thumbs down. 
        <br></br>
        If you'd like to search for a breed, navigate to the Search page! 
        <br></br>
        <bold style = {{fontSize: 50}}>Happy Hunting!</bold>
    </section>
    </div>
    </>
)
}

export default About;