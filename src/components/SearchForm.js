import React from "react";


const styles = {
  container: {
    padding: 30,

  }
}

function SearchForm(props) {
  return (
    <>
      <div style={styles.container} className="container">
        <form className="form" >
          <label style = {{padding: 20}}> Breed Name: </label>
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