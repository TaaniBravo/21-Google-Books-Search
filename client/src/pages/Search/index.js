import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import { List, ListItem } from "../../components/List";
import SearchCard from "../../components/CustomCards/SearchCard";
import SearchForm from "../../components/SearchForm";

const Search = () => {
  return (
    <main>
      <Hero />
      <Container>
        <h2>Book Search</h2>
        <SearchForm />
      </Container>
      <br />
      <Container>
        <h2>Results </h2>
        <List>
          <ListItem>
            <SearchCard></SearchCard>
          </ListItem>
        </List>
      </Container>
    </main>
  );
};

export default Search;
