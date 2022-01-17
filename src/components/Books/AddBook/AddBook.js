import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddBook.module.css';

const AddBook = ({ categories }) => (
  <form className={styles.form}>
    <h2>Add New Book</h2>
    <input type="text" placeholder="Book title" required />
    <select defaultValue="">
      <option value="" hidden disabled>
        Categories
      </option>
      {categories.map((category) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
    <button type="submit">Add Book</button>
  </form>
);

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

AddBook.defaultProps = {};

export default AddBook;
