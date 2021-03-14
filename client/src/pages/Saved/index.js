import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import { List, ListItem } from "../../components/List";
import SavedCard from "../../components/CustomCards/SavedCard";
import { useBookContext } from "../../utils/GlobalState";
import { UPDATE_BOOKS, REMOVE_BOOK, LOADING } from "../../utils/actions";
import API from "../../utils/API";

const Saved = () => {
  const [state, dispatch] = useBookContext();

  const getBooks = async () => {
    dispatch({ type: LOADING });
    const res = await API.getBooks();
    dispatch({
      type: UPDATE_BOOKS,
      savedBooks: res.data
    });
  };

  const removeBook = id => {
    dispatch({ type: REMOVE_BOOK, _id: id });
  };

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Hero />
      <Container fluid>
        <h2>Saved Books</h2>
        {state.savedBooks?.length ? (
          <List>
            {state.savedBooks.map(book => (
              <ListItem key={book.id}>
                <SavedCard removeBook={removeBook} {...book}></SavedCard>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>🤔 You haven't saved any books yet! 🤔</h3>
        )}
      </Container>
    </main>
  );
};

export default Saved;
