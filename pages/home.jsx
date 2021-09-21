import React, {useContext} from 'react';
import ThemeContext from "../context/Theme/ThemeContext"
import {makeStyles} from '@material-ui/core/styles';

const HomePage = () => {

    const {
        background,
        font,
        text,
        button,
        darkMode,
        lightMode
    } = useContext(ThemeContext);

    const useStyles = makeStyles((theme) => ({
        style: {
            background: background,
            fontFamily: font,
            color: text,
        },
        button: {
            color: button.color,
            background: button.bg
        }
    }));

    const classes = useStyles();


    return (
        <div className={classes.style}>
            <p>HOLA</p>
            <button onClick={(e) => darkMode()}>
                Dark
            </button>
            <button onClick={(e) => lightMode()}>
                Light
            </button>
        </div>
    )
}
export default HomePage;