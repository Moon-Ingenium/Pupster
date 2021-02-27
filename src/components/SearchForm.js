import React from "react";
import Jumbotron from "./Jumbotron";

const styles = {
    container:{
        padding: 30,
  
    }
}
function SearchForm(){
return(
    <>
    <Jumbotron>Search By Breed</Jumbotron>
    <div style = {styles.container} className = "container">
        
    <form className="form">
          <input
            // value={firstName}
            name="breed"
            // onChange={handleInputChange}
            type="text"
            placeholder="Search Breed"
          />
          <button className = "btn">Submit</button>
        </form>
        </div>
      </>
)
}

export default SearchForm;