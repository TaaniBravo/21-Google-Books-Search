import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import { List, ListItem } from "../../components/List";
import CustomCard from "../../components/CustomCard";
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
            <CustomCard></CustomCard>
          </ListItem>
        </List>
      </Container>
    </main>
  );
};

export default Search;
