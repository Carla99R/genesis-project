import React, {useContext} from 'react';
import ThemeContext from "../context/Theme/ThemeContext"
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../components/Navbar/Navbar';

const HomePage = () => {

    const {
        style,
        button,
        darkMode,
        lightMode
    } = useContext(ThemeContext);

    const useStyles = makeStyles((theme) => ({
        style: {
            background: style.background,
            fontFamily: style.font,
            color: style.text,
        },
        button: {
            color: button.color,
            background: button.bg
        }
    }));

    const classes = useStyles();


    return (
        <div className={classes.style}>
            <Navbar/>
            {/* <button onClick={(e) => darkMode()} className={classes.button}>
                Dark
            </button>
            <button onClick={(e) => lightMode()} className={classes.button}>
                Light
            </button> */}
        </div>
    )
}
export default HomePage;