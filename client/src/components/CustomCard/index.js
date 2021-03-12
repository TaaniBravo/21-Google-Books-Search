import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.scss";

const CustomCard = () => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Img variant="top" src="" />
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className="viewBtn">
            View
          </Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
