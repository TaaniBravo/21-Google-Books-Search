import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import { List, ListItem } from "../../components/List";
import CustomCard from "../../components/CustomCard";

const Saved = () => {
  return (
    <main>
      <Hero />
      <Container>
        <h2>Saved Books</h2>
        <List>
          <ListItem>
            <CustomCard></CustomCard>
          </ListItem>
        </List>
      </Container>
    </main>
  );
};

export default Saved;
