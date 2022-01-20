import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook/AddBook';
import BookItem from './BookItem/BookItem';

const dummyCategories = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Science Fiction' },
  { id: 3, name: 'Economy' },
];
const Books = () => {
  const books = useSelector((state) => state.books);
  const categories = [...dummyCategories];
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <AddBook categories={categories} />
    </>
  );
};

Books.propTypes = {};

Books.defaultProps = {};

export default Books;
