import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Books.module.css';
import AddBook from './AddBook/AddBook';
import BookItem from './BookItem/BookItem';

const dummyCategories = [
  { id: 1, name: 'cat1' },
  { id: 2, name: 'cat2' },
  { id: 3, name: 'cat3' },
  { id: 4, name: 'cat4' },
];
const Books = () => {
  const books = useSelector((state) => state.books);
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
