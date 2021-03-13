import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import { List, ListItem } from "../../components/List";
import SearchCard from "../../components/CustomCards/SearchCard";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/API";
import { useBookContext } from "../../utils/GlobalState";
import { LOADING, SET_SEARCH_INPUT, UPDATE_SEARCH } from "../../utils/actions";

const Search = () => {
  const [state, dispatch] = useBookContext();
  const input = useRef();

  const handleInputChange = e => {
    dispatch({ type: SET_SEARCH_INPUT, input: input.current.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({ type: LOADING });
    API.searchBooks(state.searchInput)
      .then(({ data }) => {
        dispatch({ type: LOADING });
        dispatch({ type: UPDATE_SEARCH, books: data.items });
      })
      .then(() => {
        console.log(state.searchResults);
      });
  };

  return (
    <main>
      <Hero />
      <Container>
        <h2>Book Search</h2>
        <SearchForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          input={input}
        />
      </Container>
      <br />
      <Container>
        <h2>Search Results</h2>
        <List>
          {state.searchResults.length ? (
            state.searchResults.map(book => (
              <ListItem key={book.id}>
                <SearchCard {...book}></SearchCard>
              </ListItem>
            ))
          ) : (
            <h3>📚 So many choices... Where should you start? 📚</h3>
          )}
        </List>
      </Container>
    </main>
  );
};

export default Search;
