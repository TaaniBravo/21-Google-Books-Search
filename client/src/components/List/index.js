import React from "react";
import { ListGroup } from "react-bootstrap";

export const List = ({ children }) => {
  return (
    <div>
      <ListGroup>{children}</ListGroup>
    </div>
  );
};

export const ListItem = ({ children }) => {
  return <ListGroup.Item>{children}</ListGroup.Item>;
};
