import React from 'react';
import HomePage from './home';
import ThemeState from "../context/Theme/ThemeState";

const Index = () => {
    return (
        <React.StrictMode>
            <ThemeState>
                <HomePage/>
            </ThemeState>
        </React.StrictMode>
    );
}
export default Index;

