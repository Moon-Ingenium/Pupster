import React from "react";

function SearchResults(props) {

    return (
        <>

            <ul className="list-group search-results">
                {props.results.map(result => (
                    <li className="list-group-item" key={result}><img className="mx-auto d-block" style={{maxWidth: 300, maxHeight: "auto"}} src={result} alt="dog" /></li>
                ))}
            </ul>

        </>
    )
}

export default SearchResults;