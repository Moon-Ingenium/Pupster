import React from "react";
import Jumbotron from "./Jumbotron";

const styles = {
  container: {
    padding: 30,

  }
}

function SearchForm(props) {
  return (
    <>
      <Jumbotron>Search By Breed</Jumbotron>
      <div style={styles.container} className="container">

        <form className="form" >
          <label>Breed Name: </label>
          <input
            value={props.breed}
            name="breed"
            onChange = {props.handleChange}
            type="text"
            placeholder="Search Breed"
            id="breed"
          />

          <datalist id="breed"> </datalist>
          <button type="submit" 
            className="btn" onClick = {props.handleSubmit} >Submit</button>
        </form>
      </div>
    </>
  )
}

export default SearchForm;