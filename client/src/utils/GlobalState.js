import React, { createContext, useReducer, useContext } from "react";
import { SAVE_BOOK, REMOVE_BOOK } from "./actions";

const bookContext = createContext();
const { Provider } = bookContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_BOOK:
      return {
        ...state,
        savedBooks: action.books
      };
    case REMOVE_BOOK:
      return {
        ...state,
        savedBooks: state.books.filter(book => {
          return book._id !== action._id;
        })
      };
    default:
      break;
  }
};

const bookProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    savedBooks: [
      {
        title: "",
        authors: [],
        description: "",
        image: ""
      }
    ]
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBookContext = () => useContext(bookContext);

export { bookProvider, useBookContext };
