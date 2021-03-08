import  React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";


function Search(props){

return(
    <>
    <SearchForm />
    <SearchResults />
    </>
)
}

export default Search;