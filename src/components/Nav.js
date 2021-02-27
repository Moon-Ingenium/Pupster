import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                <Link to="/" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
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