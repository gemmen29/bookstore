import { v4 as uuid } from 'uuid';
import {
  addBook as addNewBook,
  deleteBook as removeExistingBook,
} from '../../api/APIHelper';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
