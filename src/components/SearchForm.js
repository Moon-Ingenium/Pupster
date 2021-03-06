import {React}from "react";
import Jumbotron from "./Jumbotron";

const styles = {
    container:{
        padding: 30,
  
    }
}


function SearchForm(props){
return(
    <>
    <Jumbotron>Search By Breed</Jumbotron>
    <div style = {styles.container} className = "container">
        
    <form className="form">
      <label>Breed Name: </label>
          <input
            value={props.search}
            name="breed"
            // onChange={handleInputChange}
            type="text"
            placeholder="Search Breed"
            id ="breed"
          />
          <datalist id = "breed">{props.breeds.map(breed=> (<option value={breed} key ={breed} />))} </datalist>
          <button type = "submit" onClick = {props.handleSubmit}
           className = "btn">Submit</button>
        </form>
        </div>
      </>
)
}

export default SearchForm;