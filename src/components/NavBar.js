import React from "react";
import reactLogo from "../images/react-logo.png";

export default function NavBar() {
    return (
        <nav>
            <img src= {reactLogo} className="nav--icon" />
            <h3 className="nav--icon_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project One</h4>
        </nav>
    )
}