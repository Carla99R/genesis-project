import React, { useContext } from 'react';
import ThemeContext from "../../context/Theme/ThemeContext"
import styles from './Navbar.module.css';
import { makeStyles } from '@material-ui/core/styles';



const Navbar = () => {

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
      <h1>Lleva tu negocio al próximo nivel.</h1>
      <p>Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico mentitum duo.
        Illum iusto laoreet his te. Lorem partiendo mel ex. Ad vitae admodum voluptatum per.</p>
    </div>
  )
}

export default Navbar;
