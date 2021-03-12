import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchForm = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title, Character, Author"
          ref={props.input}
          onChange={props.handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
