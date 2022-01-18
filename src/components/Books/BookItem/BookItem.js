import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookItem.module.css';

const BookItem = ({ book }) => (
  <div className={styles.BookItem}>
    {`Name: ${book.title}, Category: ${book.author}`}
    <button type="button">Remove</button>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

BookItem.defaultProps = {};

export default BookItem;
