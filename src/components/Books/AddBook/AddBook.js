import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
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
    <>
      <h2 className="px-11 py-2 text-xl font-bold text-gray-500">
        ADD NEW BOOK
      </h2>
      <form
        className="grid grid-cols-4 gap-3 px-10"
        onSubmit={submitBookToStore}
      >
        <input
          type="text"
          className="shadow col-span-4 md:col-span-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={bookTitle}
          onChange={bookTitleHandler}
          placeholder="Book title"
          required
        />
        <select
          className="block col-span-2 md:col-span-1 bg-white border border-gray-400 hover:border-gray-500 px-1 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={bookCategory}
          onChange={bookCategoryHandler}
        >
          <option value="" hidden disabled>
            Categories
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 col-span-2 md:col-span-1 hover:bg-blue-700 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Book
        </button>
      </form>
    </>
  );
};

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

AddBook.defaultProps = {};

export default AddBook;
