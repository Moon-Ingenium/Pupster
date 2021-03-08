import React, { useState } from "react";
import Jumbotron from "./Jumbotron";

const styles = {
    container:{
        padding: 30,
  
    }
}


function SearchForm(props){

  const [breed, setBreed] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

  }

return(
    <>
    <Jumbotron>Search By Breed</Jumbotron>
    <div style = {styles.container} className = "container">
        
    <form className="form">
      <label>Breed Name: </label>
          <input
            value={breed}
            name="breed"
            onChange={e => setBreed(e.target.value)}
            type="text"
            placeholder="Search Breed"
            id ="breed"
          />
          
          <datalist id = "breed">{props.breeds.map(breed=> (<option value={breed} key ={breed} />))} </datalist>
          <button type = "submit" onClick = {handleSubmit}
           className = "btn">Submit</button>
        </form>
        </div>
      </>
)
}

export default SearchForm;