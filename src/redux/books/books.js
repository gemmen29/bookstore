import { v4 as uuid } from 'uuid';
import {
  addBook as addNewBook,
  deleteBook as removeExistingBook,
  getAllBooks as getAllStoreBooks,
} from '../../api/APIHelper';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_ALL_BOOKS = 'bookStore/books/GET_ALL_BOOKS';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const { title, category } = payload;
  const book = {
    id: uuid(),
    title,
    category,
  };
  const text = await addNewBook(book);
  if (text === 'Created') {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  }
};

export const removeBook = (payload) => async (dispatch) => {
  const text = await removeExistingBook(payload);
  if (text === 'The book was deleted successfully!') {
    dispatch({
      type: REMOVE_BOOK,
      payload,
    });
  }
};

export const getAllBooks = () => async (dispatch) => {
  const books = await getAllStoreBooks();

  const validBooks = [];
  Object.entries(books).forEach((book) => {
    validBooks.push({
      id: book[0],
      ...book[1][0],
    });
  });

  dispatch({
    type: GET_ALL_BOOKS,
    payload: validBooks,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter(({ id }) => id !== action.payload);

    case GET_ALL_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
