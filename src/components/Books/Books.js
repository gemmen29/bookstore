import React from 'react';
import styles from './Books.module.css';
import AddBook from './AddBook/AddBook';
import BookItem from './BookItem/BookItem';

const dummyBooks = [
  { id: 1, name: 'Book 1', category: 'cat1' },
  { id: 2, name: 'Book 2', category: 'cat2' },
  { id: 3, name: 'Book 3', category: 'cat3' },
  { id: 4, name: 'Book 4', category: 'cat4' },
];

const dummyCategories = [
  { id: 1, name: 'cat1' },
  { id: 2, name: 'cat2' },
  { id: 3, name: 'cat3' },
  { id: 4, name: 'cat4' },
];
const Books = () => {
  const books = [...dummyBooks];
  const categories = [...dummyCategories];
  return (
    <div className={styles.Books}>
      <AddBook categories={categories} />
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

Books.propTypes = {};

Books.defaultProps = {};

export default Books;
