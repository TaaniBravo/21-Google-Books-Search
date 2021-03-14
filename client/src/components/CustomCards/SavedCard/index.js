import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.scss";

const CustomCard = props => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.authors?.join(", ")}
          </Card.Subtitle>
          <Card.Img variant="top" src="" />
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary" className="viewBtn">
            View
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              console.log(props._id);
              props.removeBook(props._id);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
