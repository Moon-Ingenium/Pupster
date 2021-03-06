import React from "react";

function SearchResults(props) {
    return (
        <><ul className="list-group search-results">
            {props.breeds.map(breed => (
                <li className="list-group-item" key={breed}><img className="img-fluid" src={breed} alt="dog" /></li>
            ))}
        </ul>
        </>
    )
}

export default SearchResults;