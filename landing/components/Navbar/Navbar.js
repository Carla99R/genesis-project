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

  const theme = useStyles();

  return (
    <div className={theme.style}>
      <div className={styles.topnav}>
        <a href="#news">Nosotros</a>
        <a href="#contact">Productos</a>
        <a href="#about">Servicios</a>
        <a href="#about">Portafolio</a>
        <a href="#about">Contacto</a>
      </div>
    </div>
  )
}

export default Navbar;
