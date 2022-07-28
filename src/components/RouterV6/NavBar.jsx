import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <ul className={styles.navbar}>
      <li><NavLink to="/" className={styles.navbar__link}>Home</NavLink></li>
      <li><NavLink to="/about" className={styles.navbar__link}>About</NavLink></li>
      <li><NavLink to="/filter" className={styles.navbar__link}>Filter</NavLink></li>
      <li><NavLink to="/contact" className={styles.navbar__link}>Contact</NavLink></li> 
      <li><NavLink to="/login" className={styles.navbar__link}>Login</NavLink></li> 
    </ul>
  );
};

export default NavBar;
