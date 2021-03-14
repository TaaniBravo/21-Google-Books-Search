import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import "./style.scss";

const CustomCard = props => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{props.volumeInfo.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.volumeInfo.authors?.join(", ")}
          </Card.Subtitle>
          <Row>
            <Col sm={2}>
              <Card.Img
                variant="top"
                src={props.volumeInfo.imageLinks.thumbnail}
              />
            </Col>
            <Col sm={10}>
              <Card.Text>{props.searchInfo?.textSnippet}</Card.Text>
            </Col>
          </Row>
          <div className="buttons-group">
            <a
              href={props.volumeInfo.previewLink}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="primary" className="viewBtn">
                View
              </Button>
            </a>
            <Button
              variant="success"
              onClick={() => {
                const bookData = {
                  authors: props.volumeInfo.authors,
                  title: props.volumeInfo.title,
                  description: props.searchInfo?.textSnippet,
                  image: props.volumeInfo.imageLinks.thumbnail,
                  link: props.volumeInfo.previewLink
                };
                props.saveBook(bookData);
              }}
            >
              Save
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
