import moment from 'moment';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Article = ({ date, title, paraText, backgroundColor }) => (
  <Col xs sm={4} className="infoCardColumn">
    <Card p-5 style={{ backgroundColor: backgroundColor }}>
      <Card.Header> {moment(date).format("DD MMM, YYYY")}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {paraText}
        </Card.Text>
        <Button variant="light">Read More</Button>
      </Card.Body>
    </Card>
  </Col>
);

export default Article;
