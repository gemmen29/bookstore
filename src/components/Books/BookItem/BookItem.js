import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookItem.module.css';

const BookItem = ({ book }) => (
  <div className={styles.BookItem}>
    {`Name: ${book.name}, Category: ${book.category}`}
    <button type="button">Remove</button>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

BookItem.defaultProps = {};

export default BookItem;
