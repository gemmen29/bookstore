import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../../redux/books/books';
import styles from './BookItem.module.css';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const removeBookHandler = () => {
    dispatch(removeBook(book.id));
  };
  return (
    <div className={styles.BookItem}>
      {`Name: ${book.title}, Category: ${book.category}`}
      <button type="button" onClick={removeBookHandler}>
        Remove
      </button>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

BookItem.defaultProps = {};

export default BookItem;
