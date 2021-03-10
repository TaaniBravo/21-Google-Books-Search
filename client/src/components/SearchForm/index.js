import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search:</Form.Label>
        <Form.Control type="text" placeholder="Title, Character, Author" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
