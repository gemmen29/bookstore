import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './AddBook.module.css';
import { addBook } from '../../../redux/books/books';

const AddBook = ({ categories }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const dispatch = useDispatch();

  const bookTitleHandler = (e) => {
    setBookTitle(e.target.value);
  };

  const bookAuthorHandler = (e) => {
    setBookAuthor(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const isBookTitleValid = bookTitle.trim().length > 0;
    const isBookAuthorValid = bookAuthor.trim().length > 0;
    if (isBookTitleValid && isBookAuthorValid) {
      const newBook = {
        title: bookTitle,
        author: bookAuthor,
      };
      dispatch(addBook(newBook));
      setBookTitle('');
      setBookAuthor('');
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
      <input
        type="text"
        value={bookAuthor}
        onChange={bookAuthorHandler}
        placeholder="Author"
        required
      />
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
};

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

AddBook.defaultProps = {};

export default AddBook;
