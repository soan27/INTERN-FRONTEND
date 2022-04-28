import React from "react";
import { Container, Col, Row } from "react-bootstrap";
export const FromContainer = ({ children }) => {
  return (
    <div>
      <Container className="bg-secondary py-5">
        <Row className="justify-content-md-center">
          <Col sx={12} md={9}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
