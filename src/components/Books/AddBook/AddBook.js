import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './AddBook.module.css';
import { addBook } from '../../../redux/books/books';

const AddBook = ({ categories }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const dispatch = useDispatch();

  const bookTitleHandler = (e) => {
    setBookTitle(e.target.value);
  };

  const bookCategoryHandler = (e) => {
    setBookCategory(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const isBookTitleValid = bookTitle.trim().length > 0;
    const isBookCategoryValid = bookCategory !== '';
    if (isBookTitleValid && isBookCategoryValid) {
      const newBook = {
        title: bookTitle,
        category: bookCategory,
      };
      dispatch(addBook(newBook));
      setBookTitle('');
      setBookCategory('');
    }
  };

  return (
    <form className={styles.form} onSubmit={submitBookToStore}>
      <h2>Add New Book</h2>
      <input
        type="text"
        value={bookTitle}
        onChange={bookTitleHandler}
        placeholder="Book title"
        required
      />
      <select value={bookCategory} onChange={bookCategoryHandler}>
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
};

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

AddBook.defaultProps = {};

export default AddBook;
