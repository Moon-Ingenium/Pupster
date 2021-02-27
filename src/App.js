import React from "react";
import ReactDom from 'react-dom';
import About from "./pages/About";



function App() {
  return (
    <Router>
      <>
      <Nav/>
<Route exact path = "/" component = {About}/>
<Route exact path = "/about" component = {About}/>
<Route exact path = "/search" component = {Search}/>
<Route exact path = "/discover" component = {Discover}/>
</>
</Router>
  );
}

export default App;
