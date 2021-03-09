import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();
    return (
        <>
            <nav className="navbar">
                <div className="container">
                <Link style = {{fontSize: "50px"}}to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        Pupster
                    </Link>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                About
        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                                Search
        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/discover" className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
                                Discover
        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;