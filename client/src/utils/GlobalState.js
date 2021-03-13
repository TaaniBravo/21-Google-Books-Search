import React, { createContext, useReducer, useContext } from "react";
import { SAVE_BOOK, REMOVE_BOOK, UPDATE_BOOKS } from "./actions";
import API from "./API";
// import API from "./API";

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_BOOKS:
      return {
        ...state,
        savedBooks: [action.savedBooks]
      };
    case SAVE_BOOK:
      return {
        ...state,
        savedBooks: [action.saveBook, ...state.savedBooks]
      };
    case REMOVE_BOOK:
      return {
        ...state,
        savedBooks: [
          state.books.filter(book => {
            return book._id !== action._id;
          })
        ]
      };
    default:
      return state;
  }
};

const BookProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    savedBooks: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBookContext = () => useContext(BookContext);

export { BookProvider, useBookContext };
