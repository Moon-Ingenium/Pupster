import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import useDebounce from "../utils/debounceHook";

const styles = {
    container: {
        padding: 30,

    }
}

function Search() {
    const [breed, setBreed] = useState("");
    const [results, setResults] = useState([]);
    const debouncedSearchTerm = useDebounce(breed, 500);
 
    const handleChange = e => {
        setBreed(e.target.value);
    }

    useEffect(() => {
        if (!breed) {
            return;
        }
        if (debouncedSearchTerm) {
            API.generateSearch(breed.toLowerCase()).then((res) => {
                if (!res) {
                    throw new Error("No Results Found")
                }
                setResults(res.data.message);
            });
        }
    }, [debouncedSearchTerm]);


    return (
        <>
            <Jumbotron />
            <Row>
                <Col size="12">
                    <SearchForm 
                    handleChange={handleChange} results={results} />
                </Col>
            </Row>
            <Row>
                <Col size="12">
                    <Container style={styles.container}>
                        <SearchResults results={results} />
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Search;