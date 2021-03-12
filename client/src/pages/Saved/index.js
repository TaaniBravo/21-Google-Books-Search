import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import { List, ListItem } from "../../components/List";
import SavedCard from "../../components/CustomCards/SavedCard";
import { useBookContext } from "../../utils/GlobalState";
import { UPDATE_BOOKS, REMOVE_BOOK } from "../../utils/actions";

const Saved = () => {
  const [state, dispatch] = useBookContext();

  const getBooks = () => {
    dispatch({ type: UPDATE_BOOKS });
  };

  const removeBook = id => {
    dispatch({ type: REMOVE_BOOK, _id: id });
  };

  useEffect(() => {
    const getData = async () => {
      await getBooks();
    };

    getData();
  }, []);

  console.log(state);

  return (
    <main>
      <Hero />
      <Container fluid>
        <h2>Saved Books</h2>
        {/* {state.books.length ? (
          state.books.map(book => (
            <List>
              <ListItem>
                <SavedCard removeBook={removeBook}></SavedCard>
              </ListItem>
            </List>
          ))
        ) : (
          <h3>🤔 You haven't saved any books yet! 🤔</h3>
        )} */}
      </Container>
    </main>
  );
};

export default Saved;
