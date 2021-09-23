import React, {useContext} from 'react';
import ThemeContext from "../context/Theme/ThemeContext"
import {makeStyles} from '@material-ui/core/styles';

const HomePage = () => {

    const {
        mode,
        button,
        darkMode,
        lightMode
    } = useContext(ThemeContext);

    return (
        <div style={{
            background: mode.background,
            fontFamily: mode.font,
            color: mode.text
        }}>
            <p>HOLA</p>
            <button onClick={(e) => darkMode()}
                    style={{
                        color: button.color,
                        background: button.bg
                    }}>
                Dark
            </button>
            <button onClick={(e) => lightMode()}
                    style={{
                        color: button.color,
                        background: button.bg
                    }}>
                Light
            </button>
        </div>
    )
}
export default HomePage;