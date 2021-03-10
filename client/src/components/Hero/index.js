import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Find books like never before.</h1>
          <p>
            Google Books is an intuitive app that uses Google to find you books.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hero;
