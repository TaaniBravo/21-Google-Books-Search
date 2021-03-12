import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import { List, ListItem } from "../../components/List";
import SearchCard from "../../components/CustomCards/SearchCard";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/API";

const Search = () => {
  const input = useRef();

  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState({});

  const handleInputChange = e => {
    setSearchInput(input.current.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    API.searchBooks(searchInput).then(({ data }) => {
      setResults(data);
      console.log(results);
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
          {results.items?.length ? (
            results.items.map(book => (
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
