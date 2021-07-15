import React from "react";

import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

interface Props {
  content: string,
}

export const Header:React.FC<Props> = ({ content }) => {

  return (
    <Container fluid="md">
      <div style={{ height: "50px", display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
        <Row>
          <Col>{`Selected region: ${content ? (content) : ('choose region')}`}</Col>
        </Row>
      </div>
    </Container>
  );
};
