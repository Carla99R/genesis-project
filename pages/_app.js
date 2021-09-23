import ThemeState from "../context/Theme/ThemeState";
import React from "react";
import HomePage from "./home";

function Application() {

    return (
        <ThemeState>
            <HomePage/>
        </ThemeState>
    )
}

export default Application