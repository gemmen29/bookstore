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
    <section className="px-10 py-3">
      <div className="grid grid-cols-4 gap-10 px-10 items-center shadow rounded border-2 py-10 bg-white">
        <div className="col-span-4 sm:col-span-2 lg:col-span-2">
          <h3 className="text-gray-400 font-bold">{book.category}</h3>
          <h2 className="font-bold text-xl">{book.title}</h2>
          <h3 className="text-blue-400">Suzanne Collins</h3>
          <div className="flex gap-3 py-2">
            <button className="text-blue-400" type="button">
              Comments
            </button>
            <button
              className="text-blue-400 border-r-2 border-l-2 px-3"
              type="button"
              onClick={removeBookHandler}
            >
              Remove
            </button>
            <button className="text-blue-400" type="button">
              Edit
            </button>
          </div>
        </div>
        <div className="flex gap-3 items-center col-span-4 sm:col-span-2 lg:col-span-1">
          <svg width="100" height="100">
            <circle
              r="35"
              cx="50"
              cy="50
          "
              className={styles.track}
            />
            <circle
              r="35"
              cx="50"
              cy="50"
              className={`${styles['progress-circle']} ${styles['blue-circle']}`}
            />
          </svg>
          <div>
            <h6 className="text-5xl">8%</h6>
            <p className="text-sm text-gray-400">Completed</p>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <h5 className="text-sm text-gray-400">Current Chapter</h5>
          <h4 className="text-2xl">Chapter 3</h4>
          <button
            className="bg-sky-500 text-sm mt-3 col-span-2 md:col-span-1 hover:bg-blue-700 text-white py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </section>
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
