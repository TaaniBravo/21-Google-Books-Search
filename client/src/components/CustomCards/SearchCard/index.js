import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.scss";

const CustomCard = props => {
  console.log(props);
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{props.volumeInfo.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.volumeInfo.authors.join(", ")}
          </Card.Subtitle>
          {/* <Card.Img variant="top" src={props.volumeInfo.imageLinks.thumbnail} /> */}
          <Card.Text>{props.searchInfo?.textSnippet}</Card.Text>
          <a
            href={props.volumeInfo.previewLink}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="primary" className="viewBtn">
              View
            </Button>
          </a>
          <Button variant="success">Save</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
