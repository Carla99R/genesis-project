import React, {useReducer} from 'react';
import ThemeReducer from './ThemeReducer';
import ThemeContext from "./ThemeContext";

const ThemeState = (props) => {

    const initialState = {
        mode: {
            background: "whitesmoke",
            font: "Tinos",
            text: "black",
        },
        button: {
            color: "#FFFFFF",
            bg: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        },
    }

    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    const lightMode = () => {
        dispatch(initialState)
    }

    const darkMode = () => {
        dispatch({
            mode: {
                background: "black",
                font: "Ubuntu",
                text: "whitesmoke",
            },
            button: {
                color: "#000000",
                bg: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
            }
        })
    }

    return (
        <ThemeContext.Provider value={{
            mode: state.mode,
            button: state.button,
            darkMode,
            lightMode
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeState;





