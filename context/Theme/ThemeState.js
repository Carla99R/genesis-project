import React, {useReducer} from 'react';
import ThemeReducer from './ThemeReducer';
import ThemeContext from "./ThemeContext";

const ThemeState = (props) => {

    const initialState = {
        background: "whitesmoke",
        font: "Tinos",
        text: "black",
        button: {
            color: "#FFFFFF",
            bg: "#000000"
        },
    }

    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    const lightMode = () => {
        dispatch({
            background: "whitesmoke",
            font: "Tinos",
            text: "black",
            button: {
                color: "#FFFFFF",
                bg: "#000000"
            }
        })
    }

    const darkMode = () => {
        dispatch({
            background: "black",
            font: "Ubuntu",
            text: "whitesmoke",
            button: {
                color: "#000000",
                bg: "#FFFFFF"
            }
        })
    }

    return (
        <ThemeContext.Provider value={{
            background: state.background,
            font: state.font,
            text: state.text,
            button: state.button,
            darkMode,
            lightMode
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeState;





