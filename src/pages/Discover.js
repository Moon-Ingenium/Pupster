import React, { useState } from "react";
import Image from "../components/Image";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Button from "../components/Button";
import Alert from "../components/Alert";
import API from "../utils/API";

const styles = {
    container: {
        margin: 30,
        padding: 30,
        margin: "auto",
        width: "50%",
        display: "block",
        justifyContent: "center"
    }
}

function Discover() {
    const [number, setnumber] = useState(0);
    const [image, setImage] = useState("https://images.dog.ceo/breeds/labrador/n02099712_7406.jpg");
    const [match, setMatch] = useState(false);

    const handleChange = event => {
        let btnType = event.target.attributes.getNamedItem("data-value").value;
        {
            if (btnType === "picked") {
                setnumber(number + 1);
                setMatch(true);
            }
        }
        loadDog();
    }
    function loadDog() {
        API.generateRandomDog().then((res) => {
            setImage(res.data.message);
        })
    }
    ;
    let alertTrue = match;
    const renderAlert = () => {
        if (match) {
            return <Alert class="alert alert-success" >Yey you matched</Alert>
        } else {
            return <Alert class="alert alert-danger">Boo You're a Monster!</Alert>
        }

    }
    return (

        <>
            <Row>
                <Col size="12">
                    <Container style={styles.container}>
                        <h1 style={{ textAlign: "center" }}>Make New Pals</h1>
                        <h3 style={{ textAlign: "center" }}>Thumbs up on any pups you'd like to meet!</h3>
                        {renderAlert()}
                        <Image style={{ maxWidth: 300, maxHeight: "auto" }} src={image} alt="dog" />
                        <Button data-value="picked" onClick={handleChange}>Like</Button>
                        <Button data-value="dislike" onClick={handleChange} >Dislike</Button>
                        <h1 style={{ textAlign: "center" }} >Made Friends with {number} pups so far!</h1>

                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Discover;
