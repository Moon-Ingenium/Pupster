import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";


function Search() {
    const [breed, setBreed] = useState("hound");
    const [results, setResults] = useState([]);
   
    const handleSubmit = e => {
        e.preventDefault();
        
    }
    const handleChange = e => {
        setBreed(e.target.value);
    }

    useEffect(() => {
        API.generateSearch(breed).then((res) => {
            setResults(res.data.message);
        });
    }, [breed]);

    return (
        <>
            <SearchForm handleSubmit={handleSubmit} handleChange = {handleChange} results={results} />
            <SearchResults results={results} />
        </>
    )
}

export default Search;