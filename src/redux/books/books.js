import { v4 as uuid } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = ({ title, author } = {}) => ({
  type: ADD_BOOK,
  payload: {
    id: uuid(),
    title,
    author,
  },
});
export const removeBook = ({ id } = {}) => ({
  type: REMOVE_BOOK,
  payload: id,
});

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
