import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Search from "./pages/Search";
import Discover from "./pages/Discover";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
      <Nav/>
<Route exact path = "/pupster" component = {About}/>
<Route exact path = "/about" component = {About}/>
<Route exact path = "/search" component = {Search}/>
<Route exact path = "/discover" component = {Discover}/>
</>
<Footer/>
</Router>
  );
}

export default App;
