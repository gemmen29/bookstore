import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header>
    <nav className={styles.nav}>
      <h1>BookStore</h1>
      <NavLink to="/books">Home</NavLink>
      <NavLink to="/categories">Calculator</NavLink>
    </nav>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
