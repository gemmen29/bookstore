import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow mb-7">
    <nav className="flex gap-6 px-10 py-5 items-center">
      <h1 className="text-2xl font-bold text-sky-500">BookStore CMS</h1>
      <NavLink className="text-gray-500 text-sm font-medium" to="/books">
        BOOKS
      </NavLink>
      <NavLink className="text-gray-500 text-sm font-medium" to="/categories">
        CATEGORIES
      </NavLink>
    </nav>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
