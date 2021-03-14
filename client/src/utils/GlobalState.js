import React, { createContext, useReducer, useContext } from "react";
import {
  SAVE_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOKS,
  LOADING,
  SET_SEARCH_INPUT,
  UPDATE_SEARCH
} from "./actions";

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_BOOKS:
      return {
        ...state,
        savedBooks: [...action.savedBooks],
        loading: false
      };
    case SAVE_BOOK:
      return {
        ...state,
        savedBooks: [action.saveBook, ...state.savedBooks],
        loading: false
      };
    case REMOVE_BOOK:
      return {
        ...state,
        savedBooks: [
          state.savedBooks.filter(book => {
            return book._id !== action._id;
          })
        ],
        loading: false
      };
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.input,
        loading: false
      };
    case UPDATE_SEARCH:
      console.log(action.books);
      return {
        ...state,
        searchResults: [...action.books],
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

const BookProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    searchResults: [],
    searchInput: "",
    savedBooks: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBookContext = () => useContext(BookContext);

export { BookProvider, useBookContext };
